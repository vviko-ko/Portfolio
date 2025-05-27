"use client"
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full px-4 py-16 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>
        <form action="https://formspree.io/f/mvojyggj" method="POST" className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
