import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiHtml5, SiCss3 } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.",],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm  <span className="text-designColor capitalize">Abdulaziz Siddikov</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum
          dolor sit amet consectetur
          adipisicing elit. Dicta asperiores porro, minima temporibus, quam mollitia doloribus
          ducimus quisquam alias enim quibusdam impedit libero ipsam, explicabo fugiat sequi
          architecto a accusamus!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.instagram.com/siddikov__o7o/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://t.me/siddikofo1" target="blank">
              <span className="bannerIcon">
                <FaTelegram />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a> */}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
