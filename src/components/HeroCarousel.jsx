import { useState } from "react";

const slides = [
  {
    image: "https://source.unsplash.com/1600x900/?nature",
    title: "Explore Nature",
    description: "Discover the beauty of the natural world with us.",
  },
  {
    image: "https://unsplash.com/photos/a-car-is-lit-by-red-light-in-the-darkness-Xx8-3aFI_YU",
    title: "Innovate the Future",
    description: "Join the tech revolution and shape tomorrow.",
  },
  {
    image: "https://source.unsplash.com/1600x900/?travel,adventure",
    title: "Adventure Awaits",
    description: "Pack your bags and travel to amazing places.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl">{slides[current].description}</p>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
      >
        ›
      </button>
    </div>
  );
}
