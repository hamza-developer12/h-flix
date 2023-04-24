import React from "react";
import Image from "next/image";
const SingleMovie = async ({ params }) => {
  async function getSingleData(id) {
    const key = process.env.RAPID_API_KEY;
    const host = process.env.RAPID_API_HOST;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
        "application-type": "application/json",
      },
    };

    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  }
  let data = await getSingleData(params.id);
  const details = data[0].details;
  return (
    <div className="container mx-auto h-[80vh]">
      <h1 className="text-2xl mt-6 mb-2 mx-6 font-bold">
        Netflix \ <sapn className="text-pink-700">{details.type}</sapn>
      </h1>
      <div className="w-full ">
        <Image
          src={details.backgroundImage.url}
          alt=""
          width={600}
          height={600}
        />
        <div className="mx-1 md:mx-0">
          <h1 className="text-3xl font-bold my-2">{details.title}</h1>
          <p>{details.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
