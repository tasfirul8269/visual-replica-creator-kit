
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select";

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
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      contactMethod: "phone",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactMethod = watch("contactMethod");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-[rgba(37,111,255,1)] self-stretch flex w-full items-center gap-[40px_54px] overflow-hidden justify-between flex-wrap mt-12 px-5 py-[30px] md:pl-[50px] md:pr-[30px] lg:pl-[110px] max-md:mt-10">
      <div className="self-stretch flex min-w-[280px] flex-col items-stretch justify-center w-full md:w-[479px] my-auto">
        <h2 className="text-white text-3xl md:text-4xl font-semibold font-['Montserrat']">
          Book a Free Consultation
        </h2>
        <p className="text-[rgba(230,230,230,1)] text-xl md:text-2xl font-normal mt-5 font-['Montserrat']">
          Let's schedule a time to talk. Whether it's a Zoom call or a coffee at
          our office — we'd love to meet you.
        </p>
      </div>
      <div className="bg-white self-stretch flex min-w-[300px] flex-col items-stretch text-black font-normal w-full md:w-[650px] lg:w-[765px] my-auto pt-7 md:pt-9 pb-12 md:pb-[85px] px-6 md:px-9 rounded-[20px] border-[rgba(0,0,0,0.1)] border-solid mt-8 md:mt-0">
        <h3 className="text-2xl md:text-[32px] font-semibold font-['Montserrat']">Contact Form</h3>
        <div className="border min-h-px w-full mt-[30px] border-[#F5F5F5] border-solid" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-base mt-[30px] font-['Montserrat']"
        >
          <div className="flex w-full items-stretch gap-1.5 flex-wrap md:flex-nowrap rounded-[10px]">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="bg-[rgba(246,247,255,1)] w-full md:grow md:shrink-0 md:basis-0 px-[11px] py-3.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true })}
              className="bg-[rgba(246,247,255,1)] w-full md:grow md:shrink-0 md:basis-0 px-[11px] py-3.5 rounded-[10px] mt-1.5 md:mt-0 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="flex w-full items-stretch gap-1.5 flex-wrap md:flex-nowrap mt-5 rounded-[10px]">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="bg-[rgba(246,247,255,1)] w-full md:grow md:shrink-0 md:basis-0 px-[11px] py-3.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="bg-[rgba(246,247,255,1)] w-full md:grow md:shrink-0 md:basis-0 px-[11px] py-3.5 rounded-[10px] mt-1.5 md:mt-0 focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="w-full mt-5 rounded-[10px]">
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              className="bg-[rgba(246,247,255,1)] w-full pt-[13px] pb-[82px] px-[11px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)]"
            />
          </div>

          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-[40px] mt-[30px]">
            <div className="text-base w-full md:w-[265px]">
              <label htmlFor="interest" className="block mb-2.5">
                Interested in :
              </label>
              <Select
                onValueChange={(value) => setValue("interest", value)}
                defaultValue=""
              >
                <SelectTrigger className="bg-[rgba(246,247,255,1)] w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[rgba(37,111,255,1)] border-0">
                  <SelectValue placeholder="Select your interest..." />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-[20px] border border-[#e6e6e6]">
                  <SelectItem value="buying">Buying Property</SelectItem>
                  <SelectSeparator className="mx-[20px] bg-[#F5F5F5]" />
                  <SelectItem value="selling">Selling Property</SelectItem>
                  <SelectSeparator className="mx-[20px] bg-[#F5F5F5]" />
                  <SelectItem value="renting">Renting</SelectItem>
                  <SelectSeparator className="mx-[20px] bg-[#F5F5F5]" />
                  <SelectItem value="investment">Investment Opportunities</SelectItem>
                  <SelectSeparator className="mx-[20px] bg-[#F5F5F5]" />
                  <SelectItem value="management">Property Management</SelectItem>
                  <SelectSeparator className="mx-[20px] bg-[#F5F5F5]" />
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col w-full md:w-auto flex-1 mt-4 md:mt-0">
              <div className="text-base">Contact Method :</div>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-x-4 gap-y-3 mt-[15px] md:mt-[25px]">
                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="phone"
                      value="phone"
                      checked={contactMethod === "phone"}
                      onChange={() => setValue("contactMethod", "phone")}
                      className="peer appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-[#256fff] checked:border-0"
                    />
                    <Check className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <Label htmlFor="phone" className="text-[15px] ml-1">
                    Phone Call
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="whatsapp"
                      value="whatsapp"
                      checked={contactMethod === "whatsapp"}
                      onChange={() => setValue("contactMethod", "whatsapp")}
                      className="peer appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-[#256fff] checked:border-0"
                    />
                    <Check className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <Label htmlFor="whatsapp" className="text-[15px] ml-1">
                    WhatsApp
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="email"
                      value="email"
                      checked={contactMethod === "email"}
                      onChange={() => setValue("contactMethod", "email")}
                      className="peer appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-[#256fff] checked:border-0"
                    />
                    <Check className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <Label htmlFor="email" className="text-[15px] ml-1">
                    Email
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="border min-h-px w-full mt-[30px] border-[#F5F5F5] border-solid" />

          <div className="flex mt-[30px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[rgba(198,234,255,0.4)] inline-flex justify-center w-auto min-w-[200px] gap-2.5 text-[18px] text-[rgba(37,111,255,1)] font-medium text-center px-10 py-5 rounded-[15px] hover:bg-[rgba(198,234,255,0.6)] transition-colors disabled:opacity-70 font-['Montserrat']"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
