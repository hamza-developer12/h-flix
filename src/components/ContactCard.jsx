import Link from "next/link";
import React from "react";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
const ContactCard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="w-[70%] my-2 md:w-full mx-auto flex flex-col h-[30vh] rounded-lg justify-center items-center shadow-lg">
          <MdEmail size={28} className="text-pink-700" />
          <h2 className="text-md font-bold">Email</h2>
          <p>Monday to Friday Expected</p>
          <p>response time: 72 hours</p>
          <Link href="/">
            Send Email <span className="text-pink-700">-&gt;</span>
          </Link>
        </div>
        <div className="w-[70%] my-2 md:w-full mx-auto flex flex-col justify-center items-center shadow-lg">
          <MdVoiceChat size={28} className="text-pink-700" />
          <h2 className="text-md font-bold">Live Chat</h2>
          <p>Weekdays: 9 AM - 6 PM </p>
          <p>Weekends: 9 AM - 5 PM </p>
          <Link href="/">
            Chat Now <span className="text-pink-700">-&gt;</span>
          </Link>
        </div>
        <div className="w-[70%] my-2 md:w-full mx-auto flex flex-col justify-center items-center shadow-lg">
          <MdForum size={28} className="text-pink-700" />
          <h2 className="text-md font-bold">Community Forum</h2>
          <p>Monday to Friday Expected</p>
          <p>response time: 72 hours</p>
          <Link href="/">
            Ask The Community <span className="text-pink-700">-&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
