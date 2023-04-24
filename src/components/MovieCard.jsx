import React from "react";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (movie) => {
  const { id, title, type, synopsis } = movie.jawSummary;
  const url = movie.jawSummary.backgroundImage.url;
  return (
    <div className="border-gray-300 border-2 rounded-lg m-2 hover:shadow-lg  ">
      <div className="sm:flex items-center">
        <div className="mx-auto px-2  w-full h-full ">
          <div className="mx-auto mt-2 w-full">
            <Image
              src={url}
              alt={title}
              width={300}
              height={260}
              className="w-full"
            />
          </div>
          <h2 className="font-bold my-4 text-lg ">{title}</h2>
          <p className="text-sm text-gray-500 my-2">
            {synopsis.slice(0, 50) + "..."}
          </p>
          <Link href={`/movies/${id}`}>
            <button className="bg-black text-white py-1 px-4 rounded-full mt-2 mb-5">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
