"use client";
import React, { useState } from "react";
const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    let response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    if (response.status === 200) {
      e.target.reset();
      setStatus("success");
    } else {
      e.target.reset();
      setStatus("error");
    }
  };
  return (
    <form className="container mx-auto " onSubmit={handleSubmit}>
      <div className="w-[300px] mx-auto border-2 shadow-lg">
        <div className="flex flex-col m-4">
          <label htmlFor="name" className="text-sm">
            Enter Your Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            className="outline-none border-2 rounded placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your email"
            className="outline-none border-2 rounded placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="phone" className="text-sm">
            Phone Number:
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your phone"
            className="outline-none border-2 rounded placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="message" className="text-sm">
            Message:
          </label>
          <textarea
            type="text"
            name="message"
            placeholder="Enter Your message"
            className="outline-none border-2 rounded placeholder:text-sm"
          />
        </div>
        <div className="m-4">
          {status === "success" && (
            <p className="text-green-500 tex-sm">Thank You for your message</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm">
              There was an error submitting your message, Please try again
            </p>
          )}
        </div>
        <div className="m-4">
          <button className="bg-black text-white py-1.5 px-5 rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
