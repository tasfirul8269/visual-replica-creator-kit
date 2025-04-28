"use client";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeInfo } from "@/components/contact/OfficeInfo";

function Contact() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Header />
      <ContactHero />
      <ContactForm />
      <OfficeInfo />
      <Footer />
    </div>
  );
}

export default Contact;
