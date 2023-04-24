import React from "react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = ({ title, imageUrl }) => {
  return (
    <main className="bg-gradient-to-r from-[#f2d3f7] to-[#1eb6d9]">
      <div className="flex flex-col-reverse md:text-left text-center items-center justify-center  md:flex-row md:items-center md:justify-center w-[80%] mx-auto  gap-8 ">
        <div className="md:w-[50%] w-full ">
          <h1 className="text-3xl font-bold my-4">{title}</h1>
          <p>
            From award-winning dramas to blockbuster action movies, we&apos;ve
            got you covered. Browse our selection of the latest and greatest
            movies, and find your new favorite today.
          </p>
          <button className="mt-4 bg-black text-white py-2  px-4 mb-4 md:mb-4 rounded-full">
            <Link href={"/movies"}> Explore Movies</Link>
          </button>
        </div>
        <div className="md:w-[50%] w-[55%] my-10">
          <Image
            src={imageUrl}
            alt=""
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
