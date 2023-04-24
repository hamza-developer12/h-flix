import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-4xl font-bold my-4">Contact Us</h1>
      <ContactCard />
      <section>
        <h2 className="text-center text-3xl my-4">
          We&rsquo;d Love to hear{" "}
          <span className="text-pink-700">from you</span>
        </h2>
        <ContactForm />

        <div className="container mx-auto mt-6">
          <iframe
            className="w-full rounded"
            height={400}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105847.10384792229!2d72.84416909062968!3d33.99967385260389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de4d486960e829%3A0x24811f20485d53f5!2sHar%C4%ABpur%2C%20Haripur%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1682269003551!5m2!1sen!2s"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
