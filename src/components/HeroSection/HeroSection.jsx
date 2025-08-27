import { useUserProfiles } from "../../hooks/useUserProfiles";
import { usePublicImages } from "../../hooks/usePublicImages";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["BSIT", "Web Dev", "Video Editor", "Data Encoder"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1900,
  });

  const [allowScroll, setAllowScroll] = useState(false);

  const {
    data: images,
    isLoading: imagesLoading,
    error: imagesError,
  } = usePublicImages();

  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useUserProfiles();

  useEffect(() => {
    document.body.style.overflow = allowScroll ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allowScroll]);

  if (imagesLoading || usersLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-pallete-darkblue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-pallete-orange rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-pallete-lightblue rounded-full animate-bounce [animation-delay:-0.27s]"></div>
          <div className="w-4 h-4 bg-pallete-white rounded-full animate-bounce"></div>
        </div>
      </div>
    );

  if (imagesError || usersError) return <p>Failed to load content</p>;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        {/* Background Image */}
        <img
          src={images?.[0]?.url}
          alt="Hero Background"
          className="absolute inset-0 w-full object-cover h-full"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
              }}
              className="text-4xl font-bold font-akaya text-white"
            >
              {users?.[0]?.intro}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
              }}
              className="text-pallete-orange text-4xl font-bold font-akaya"
            >
              {users?.[0]?.name}
            </motion.span>
          </div>

          {/* Job Title Paragraph */}
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              stiffness: 100,
              damping: 25,
              duration: 1,
            }}
            className="text-lg text-gray-300 mt-4 text-center"
          >
            <div className="">
              <span className="">{text}</span>
              <Cursor cursorStyle="|" />
            </div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 , rotateY: 10}}
            transition={{
              type: "spring",
              stiffness: 400,
              delay: 2.5,
              duration: 1.2,
            }}
            className="mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className=""
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(255,102,0,0.4)",
                    "0 0 15px rgba(255,102,0,0.8)",
                    "0 0 5px rgba(255,102,0,0.4)",
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                onClick={() => {
                  if (!allowScroll) {
                    setAllowScroll(true);
                    // Delay scroll until scroll is enabled
                    setTimeout(() => {
                      const about = document.getElementById("about-section");
                      if (about) {
                        about.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 50);
                  } else {
                    const about = document.getElementById("about-section");
                    if (about) {
                      about.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="bg-pallete-orange px-6 py-3 rounded text-white text-lg"
              >
                View More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
