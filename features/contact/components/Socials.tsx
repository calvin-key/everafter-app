import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  return (
    <section className="bg-gray-50 py-8 pt-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-2xl font-bold">Find Us on Our Social Media</h2>
        <p className="mb-6 text-gray-600">
          Stay connected and get inspired for your big day!
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/everafter"
            target="_blank"
            className="text-primary hover:text-primary-light text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/everafter"
            target="_blank"
            className="text-primary hover:text-primary-light text-3xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com/everafter"
            target="_blank"
            className="text-primary hover:text-primary-light text-3xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://pinterest.com/everafter"
            target="_blank"
            className="text-primary hover:text-primary-light text-3xl"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
