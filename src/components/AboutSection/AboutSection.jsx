import { i } from "framer-motion/client";
import { usePrivateImages } from "../../hooks/usePrivateImages";
import { usePublicImages } from "../../hooks/usePublicImages";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function AboutSection() {
  const { data: publicImages, isLoading, isError } = usePublicImages();

  if (isLoading) return <p>Loading...</p>;
  if (isError || publicImages.length === 0)
    return <p>Can't load the images, file is missing</p>;

  const selectedImages = publicImages
    .filter((image) => ["image1.jpg", "image3.jpg"].includes(image.name))
    .map((image) => <img key={image.name} src={image.url} alt={image.name} />);

  return (
    <>
      <section id="about-section" className="relative w-full h-screen p-5 mt-5">
        <div className="w-full">
          <h2 className="justify-center flex text-4xl font-akaya">About Me</h2>
        </div>
        <span className="w-full flex justify-center">lkasjdf</span>
        <h1>Follow up testing</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          dolorum amet impedit rem, qui quia vel debitis necessitatibus autem
          minus vero! Facere velit obcaecati quibusdam nostrum itaque,
          repellendus dolorum nesciunt. Hello! I'm a passionate developer with a
          strong background in building modern web applications. I specialize in
          React, Tailwind CSS, and full-stack development.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          blanditiis, quisquam modi voluptates tempora voluptatem consequatur in
          culpa nemo! Qui doloremque nihil impedit molestiae neque, repellat
          repellendus asperiores quis a.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi
          voluptatum laborum est quaerat id placeat voluptates voluptatem atque
          exercitationem obcaecati, et nostrum quia optio aspernatur quisquam at
          soluta ex.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          provident maiores, totam temporibus accusantium perferendis, eligendi
          repellendus rerum suscipit quas voluptate reprehenderit vero aliquam
          dicta cupiditate officia magni minima ad. My goal is to create
          meaningful, user-friendly experiences that make a difference. Feel
          free to reach out if you'd like to connect or collaborate!
        </p>
      </section>
    </>
  );
}

export default AboutSection;
