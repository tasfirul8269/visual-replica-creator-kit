import React from "react";

export const Header: React.FC = () => {
  return (
    <div
      className="flex w-full flex-col items-center max-md:max-w-full"
      data-testid="header"
    >
      <div className="justify-center items-center border bg-white flex w-full flex-col overflow-hidden py-8 border-solid border-[rgba(0,0,0,0.10)] max-md:max-w-full">
        <div className="flex w-[1369px] max-w-full gap-[40px_100px] justify-between flex-wrap">
          <div className="w-[179px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/641f5fc1a0e14172a7f4376b457540cc/01905d58c65bd6e4665563a07ed3394ffd599335?placeholderIfAbsent=true"
              alt="Company Logo"
              className="aspect-[3.58] object-contain w-[179px]"
            />
          </div>
          <nav
            className="flex min-w-60 items-center gap-8 text-lg text-[#170F49] font-normal text-center leading-none flex-wrap w-[891px] max-md:max-w-full"
            aria-label="Main Navigation"
          >
            <a
              href="#"
              className="self-stretch flex whitespace-nowrap my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="self-stretch gap-1.5">Buy</div>
            </a>
            <a
              href="#"
              className="self-stretch flex whitespace-nowrap my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="self-stretch gap-1.5">Rent</div>
            </a>
            <a
              href="#"
              className="self-stretch flex my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <div className="self-stretch my-auto">Off Plan</div>
                <div className="self-stretch flex w-5 shrink-0 h-5 my-auto" />
              </div>
            </a>
            <a
              href="#"
              className="self-stretch flex whitespace-nowrap my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <div className="self-stretch my-auto">Commercial</div>
                <div className="self-stretch flex w-5 shrink-0 h-5 my-auto" />
              </div>
            </a>
            <a
              href="#"
              className="self-stretch flex whitespace-nowrap my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="self-stretch gap-1.5">Contact</div>
            </a>
            <a
              href="#"
              className="self-stretch flex whitespace-nowrap my-auto hover:text-[rgba(37,111,255,1)] transition-colors"
            >
              <div className="self-stretch gap-1.5">More</div>
            </a>
            <a
              href="#"
              className="bg-[rgba(206,255,213,1)] self-stretch flex items-center gap-2.5 text-[rgba(0,189,28,1)] font-medium whitespace-nowrap my-auto p-[15px] rounded-[100px] hover:bg-[rgba(186,235,193,1)] transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/641f5fc1a0e14172a7f4376b457540cc/330a1e6ad4aa453a64a67b14d13bb2c4e094036f?placeholderIfAbsent=true"
                alt="WhatsApp Icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch my-auto">Whatsapp</div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
