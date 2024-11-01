import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contect = () => {
  return (
    <>
      <div className="container contact" id="contect">
        <h2 className="head">CONTACT ME</h2>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/umar.munir.92167?igsh=MjFmbjlkeG16ZXN1"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/MUmarMunir533"
            target="_blank"
            className="items"
          >
            <FaGithub className="icons" />
          </a>
          <a href="mumarmunir533@gmail.com" target="_blank" className="items">
            <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contect;
