import hero from "@/assets/hero.png";
import book from "@/assets/book.jpg";

import { ArrowRight, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <>
    <div className="h-[1px] border border-solid border-yellow-300"></div>
   <section
  className="relative overflow-hidden min-h-screen flex items-center  pt-10 md:pt-0 px-6 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${hero.src})`,
  }}
>
  <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">

    {/* Left Content */}
    <div className="text-white">
      <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
        Find Your Next <br />
        <span className="text-yellow-400">
          Adventure Today
        </span>
      </h1>

      <p className="mt-6 max-w-md text-sm leading-7 text-purple-100 md:text-base">
        Access thousands of digital and physical books from our
        community library. Join StoryQuest and start your reading
        journey with just a click.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
          Browse Now
          <ArrowRight size={18} />
        </button>

        <button className="rounded-full border border-purple-300 px-6 py-3 font-semibold text-white hover:bg-white/10">
          How It Works
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="relative   pt-6 md:pt-0   flex justify-center lg:justify-end">

      <div className="absolute  left-[1vw] md:left-[15vw] lg:left-[4vw] lg:-top-3 z-10 rounded-2xl  animate-bounce bg-yellow-400 p-3 shadow-lg">
        <BookOpen className="text-black " size={28} />
      </div>

      <div
        className="h-[300px] md:h-[400px]   w-full max-w-[500px] overflow-hidden rounded-[30px] bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${book.src})`,
        }}
      >
        <div className="h-full w-full bg-black/10"></div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default HeroSection;