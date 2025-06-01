import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import HeaderSection from "./components/HeaderSection";
import ContactSection from "./components/ContactSection/ContactSection";


import DetailCard from "./components/DetailCard";
import HeroCarousel from "./components/HeroCarousel";

const sampleData = [
  {
    id: 1,
    title: "Mountain",
    image: "/img1.jpg",
    description: "A beautiful mountain landscape.",
  },
  {
    id: 2,
    title: "Beach",
    image: "/img2.jpg",
    description: "Relaxing at a sunny beach.",
  },
  {
    id: 3,
    title: "Forest",
    image: "/img3.jpg",
    description: "A peaceful walk through the forest.",
  },
];




function App() {

  return (
    <>
      <div className="relative min-h-screen">
        {/* ✅ Move gradient background behind all */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-pallete-darkblue via-pallete-lightblue to-gray-500 opacity-60" />

        {/* ✅ Sticky header stays visible */}
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
      <DetailCard items={sampleData} />
    </div>

    <HeroCarousel />
    </>
  );
}

export default App;
