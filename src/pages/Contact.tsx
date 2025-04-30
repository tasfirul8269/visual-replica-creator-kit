
"use client";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeInfo } from "@/components/contact/OfficeInfo";

function Contact() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center w-full">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <ContactHero />
        <ContactForm />
        <OfficeInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
