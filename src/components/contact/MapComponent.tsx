
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map with a temporary token
    // In production, this should be stored in environment variables
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNsbjBnczBhMjA1cWsya3A5OHVsOGR4cTcifQ.MZjl2LmQytKdS3yYHDvHTw';
    
    // Dubai coordinates - using a tuple [lng, lat] instead of an array
    const dubaiBaySquare: [number, number] = [55.267311, 25.185734];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: dubaiBaySquare,
      zoom: 15
    });
    
    // Add marker for the office location
    new mapboxgl.Marker({ color: '#256fff' })
      .setLngLat(dubaiBaySquare)
      .addTo(map.current);
      
    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );
    
    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);
  
  return (
    <div ref={mapContainer} className="w-full h-full min-h-[400px] rounded-[20px]" />
  );
};
