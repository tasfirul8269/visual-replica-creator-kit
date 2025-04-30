
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useIsMobile } from '@/hooks/use-mobile';

export const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map with a temporary token
    // In production, this should be stored in environment variables
    const token = 'pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNsbjBnczBhMjA1cWsya3A5OHVsOGR4cTcifQ.MZjl2LmQytKdS3yYHDvHTw';
    setMapboxToken(token);
    mapboxgl.accessToken = token;
    
    // Dubai coordinates - using a tuple [lng, lat] instead of an array
    const dubaiBaySquare: [number, number] = [55.267311, 25.185734];
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: dubaiBaySquare,
        zoom: isMobile ? 14 : 15,
        attributionControl: false
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
      
      // Add attribution control in the bottom-right corner
      map.current.addControl(new mapboxgl.AttributionControl(), 'bottom-right');
      
      // Handle resize events
      const handleResize = () => {
        if (map.current) {
          map.current.resize();
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      // Clean up on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        if (map.current) {
          map.current.remove();
        }
      };
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  }, [isMobile]);
  
  return (
    <div className="relative w-full h-full">
      {!mapboxToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[20px] z-10">
          <p className="text-gray-500">Map loading...</p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full min-h-[400px] rounded-[20px]" />
    </div>
  );
};
