import React from "react";

function ContactSection() {
  return (
    // h-[calc(100vh-5rem)] sm:h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6rem)]
    <section className="w-full px-4 py-12 bg-pallete-lightblue text-pallete-white flex items-center justify-center h-screen">
      <div className="w-2xl h-screen mx-auto bg-pallete-darkblue p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 rounded bg-white text-black border focus:outline-none focus:ring-2 focus:ring-pallete-orange"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded bg-white text-black border focus:outline-none focus:ring-2 focus:ring-pallete-orange"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded bg-white text-black border focus:outline-none focus:ring-2 focus:ring-pallete-orange"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pallete-orange text-white px-6 py-2 rounded hover:bg-pallete-lightblue transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
