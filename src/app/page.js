import HeroSection from "@/components/HeroSection"
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  async function getData() {
    const key = process.env.RAPID_API_KEY;
    const host = process.env.RAPID_API_HOST;

    const url =
      "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=4&limit_suggestions=20&lang=en";

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

  const data = await getData();

  let jaw = data.titles;
  return (
    <main>
      <HeroSection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"} />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-6">Featured Movies & Shows</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {jaw.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </main>
  )
}
