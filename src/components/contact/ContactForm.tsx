import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
  contactMethod: "phone" | "whatsapp" | "email";
};

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState<
    "phone" | "whatsapp" | "email"
  >("phone");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-[rgba(37,111,255,1)] self-stretch flex w-full items-center gap-[40px_54px] overflow-hidden justify-between flex-wrap mt-12 pl-[110px] pr-[30px] py-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[479px] my-auto max-md:max-w-full">
        <h2 className="text-white text-4xl font-semibold max-md:max-w-full">
          Book a Free Consultation
        </h2>
        <p className="text-[rgba(230,230,230,1)] text-2xl font-normal mt-5 max-md:max-w-full">
          Let's schedule a time to talk. Whether it's a Zoom call or a coffee at
          our office — we'd love to meet you.
        </p>
      </div>
      <div className="bg-white border self-stretch flex min-w-60 flex-col items-stretch text-black font-normal w-[765px] my-auto pt-9 pb-[85px] px-9 rounded-[20px] border-[rgba(0,0,0,0.1)] border-solid max-md:max-w-full max-md:px-5">
        <h3 className="text-[32px] font-semibold">Contact Form</h3>
        <div className="border min-h-px w-full mt-[30px] border-[rgba(0,0,0,0.05)] border-solid max-md:max-w-full" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-base mt-[30px] max-md:max-w-full"
        >
          <div className="flex max-w-full w-[686px] items-stretch gap-1.5 flex-wrap rounded-[10px]">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="bg-[rgba(246,247,255,1)] grow shrink-0 basis-0 w-fit px-[11px] py-3.5 rounded-[10px] max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true })}
              className="bg-[rgba(246,247,255,1)] grow shrink-0 basis-0 w-fit px-[23px] py-3.5 rounded-[10px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="flex max-w-full w-[686px] items-stretch gap-1.5 flex-wrap mt-5 rounded-[10px]">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="bg-[rgba(246,247,255,1)] whitespace-nowrap grow shrink-0 basis-0 w-fit px-[11px] py-3.5 rounded-[10px] max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="bg-[rgba(246,247,255,1)] grow shrink-0 basis-0 w-fit px-[23px] py-3.5 rounded-[10px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="max-w-full w-[687px] whitespace-nowrap mt-5 rounded-[10px]">
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              className="bg-[rgba(246,247,255,1)] w-full pt-[13px] pb-[82px] px-[11px] rounded-[10px] max-md:max-w-full max-md:pr-5 max-md:pb-[110px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="flex max-w-full w-[686px] gap-[40px_180px] flex-wrap mt-[30px]">
            <div className="text-base grow shrink w-[118px]">
              <label htmlFor="interest" className="block mb-2.5">
                Contact Method :
              </label>
              <select
                id="interest"
                {...register("interest", { required: true })}
                className="bg-[rgba(246,247,255,1)] flex max-w-full w-[265px] flex-col items-stretch justify-center mt-2.5 pl-[13px] pr-5 py-[15px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
              >
                <option value="" disabled selected>
                  Select your interest ....
                </option>
                <option value="buy">Buy Property</option>
                <option value="rent">Rent Property</option>
                <option value="sell">Sell Property</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex min-w-60 flex-col items-stretch justify-center grow shrink w-[302px]">
              <div className="text-base">Contact Method :</div>
              <div className="flex w-full max-w-[331px] items-stretch gap-5 text-[15px] justify-between mt-[25px] rounded-[0px_0px_0px_0px]">
                <label className="flex items-stretch gap-px cursor-pointer">
                  <input
                    type="radio"
                    value="phone"
                    checked={contactMethod === "phone"}
                    onChange={() => setContactMethod("phone")}
                    className="hidden"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/641f5fc1a0e14172a7f4376b457540cc/de28b84edea01858b915c825152d6a01d1bc5015?placeholderIfAbsent=true"
                    alt="Phone Call"
                    className="aspect-[1] object-contain w-[15px] shrink-0 rounded-[5px]"
                  />
                  <span>Phone Call</span>
                </label>

                <label className="flex items-stretch gap-1 whitespace-nowrap cursor-pointer">
                  <input
                    type="radio"
                    value="whatsapp"
                    checked={contactMethod === "whatsapp"}
                    onChange={() => setContactMethod("whatsapp")}
                    className="hidden"
                  />
                  <div
                    className={`flex w-[15px] shrink-0 h-[15px] rounded-[5px] border-[rgba(0,0,0,0.4)] border-solid ${contactMethod === "whatsapp" ? "bg-[rgba(37,111,255,1)] border-[rgba(37,111,255,1)]" : "bg-[rgba(217,217,217,0)] border"}`}
                  />
                  <span>WhatsApp</span>
                </label>

                <label className="flex items-stretch gap-1 whitespace-nowrap cursor-pointer">
                  <input
                    type="radio"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={() => setContactMethod("email")}
                    className="hidden"
                  />
                  <div
                    className={`flex w-[15px] shrink-0 h-[15px] rounded-[5px] border-[rgba(0,0,0,0.4)] border-solid ${contactMethod === "email" ? "bg-[rgba(37,111,255,1)] border-[rgba(37,111,255,1)]" : "bg-[rgba(217,217,217,0)] border"}`}
                  />
                  <span>Email</span>
                </label>
              </div>
            </div>
          </div>

          <div className="border min-h-px w-full mt-[30px] border-[rgba(0,0,0,0.05)] border-solid max-md:max-w-full" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[rgba(198,234,255,0.4)] w-full gap-2.5 text-xl text-[rgba(37,111,255,1)] font-medium text-center mt-[30px] p-5 rounded-[15px] hover:bg-[rgba(198,234,255,0.6)] transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
