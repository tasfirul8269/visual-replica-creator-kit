
import React from "react";

export const ContactHero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[400px] md:min-h-[500px] lg:min-h-[678px] w-full max-w-full overflow-hidden items-center justify-center mx-auto mt-8 md:mt-12 px-2.5 py-12 md:py-[271px] rounded-[20px] md:rounded-[30px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/641f5fc1a0e14172a7f4376b457540cc/c13970172ffffe8b36bcbda422f570abdc9871bd?placeholderIfAbsent=true"
        alt="Contact Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] text-center px-4">
        Book a Free Consultation
      </div>
      <div className="relative text-[rgba(205,205,205,1)] text-xl md:text-2xl font-medium text-center mt-5 px-4 font-['Montserrat']">
        Let's schedule a time to talk. Whether it's a Zoom call or a coffee at
        our office
        <br className="hidden md:block" /> — we'd love to meet you.
      </div>
    </section>
  );
};
