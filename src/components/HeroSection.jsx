import React, { useEffect, useRef } from "react";
import image from "../assets/img.png";
import { IoMdFlower } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const letterRefs = useRef([]);
  const paraRef = useRef(null);
  const galleryRef = useRef(null);
  const beautifulRefs = useRef([]);
  const hangImageRefs = useRef([]);
  const hangContainerRef = useRef(null);

  const hangPoints = [
    { x: 0, y: 0 },
    { x: 80, y: -10 },
    { x: 160, y: -5 },
    { x: 240, y: 5 },
  ];

  useEffect(() => {
    gsap.from(beautifulRefs.current, {
      y: 80,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.from(letterRefs.current, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top center",
      },
    });

    gsap.from(galleryRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 90%",
      },
    });

    gsap.to(paraRef.current, {
      color: "#ffffff",
      duration: 1.5,
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 80%",
      },
    });

    gsap.from(hangImageRefs.current, {
      y: 100,
      opacity: 0,
      rotate: (i) => (i % 2 === 0 ? -5 : 5),
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: hangContainerRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col justify-between items-center gap-10 pt-4 relative overflow-hidden px-4">
      <h2 className="w-full max-w-4xl text-xl sm:text-2xl lg:text-4xl mt-24 p-2 capitalize font-light font-[play] text-start flex items-center gap-2">
        Our
        <IoMdFlower className="w-6 h-6 sm:w-8 sm:h-8 text-4xl animate-bounce" />
      </h2>

      <h1 className="text-6xl sm:text-6xl lg:text-9xl font-[play] font-bold text-center flex flex-wrap justify-center gap-2">
        {"Beautiful".split("").map((char, i) => (
          <span key={i} ref={(el) => (beautifulRefs.current[i] = el)}>
            {char}
          </span>
        ))}
      </h1>

      <div
        ref={galleryRef}
        className="w-full max-w-[90%] sm:max-w-[400px] lg:max-w-[800px] aspect-square overflow-hidden border-[12px] border-black relative mt-20"
      >
        <img
          src={image}
          alt="MEMORIES"
          className="object-cover w-full h-full"
        />

        {/* MEMORIES heading */}
       <h3 className="flex absolute top-[7%] lg:top-[0%] left-1/2 -translate-x-1/2 font-[play] capitalize text-white text-xl sm:text-3xl lg:text-7xl tracking-widest z-10 leading-tight font-bold flex-col items-center gap-2">
  {"memories".split("").map((char, index) => (
    <span
      key={index}
      ref={(el) => (letterRefs.current[index] = el)}
      className="block"
    >
      {char}
    </span>
  ))}
</h3>


        {/* Polaroid Images */}
        {[
          {
            src: "https://i.pinimg.com/736x/fc/df/24/fcdf24fcfb967f1fc3ff30a14a25ed4a.jpg",
            label: "#Snippet from past.",
            pos: "top-4 right-4 rotate-6",
          },
          {
            src: "https://i.pinimg.com/736x/8c/34/9a/8c349aca862bd5c2335505b8ab54a2be.jpg",
            label: "#Moments time free.",
            pos: "top-4 left-4 -rotate-6",
          },
          {
            src: "https://i.pinimg.com/736x/0a/80/57/0a8057668df833c4594943e56d710291.jpg",
            label: "#Stories told stills.",
            pos: "bottom-4 right-4 rotate-3",
          },
          {
            src: "https://i.pinimg.com/736x/49/78/ff/4978ff8fbbbfd24fd13f8add983389ba.jpg",
            label: "#Captured Moment.",
            pos: "bottom-4 left-4 -rotate-3",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-[120px] sm:w-[160px] bg-white p-2 absolute ${item.pos} z-20 rotate-1`}
          >
            <img
              src={item.src}
              alt="not found"
              className="w-full h-[100px] sm:h-[120px] object-cover bg-black"
            />
            <h3 className="font-[qwel] text-xs sm:text-sm">{item.label}</h3>
          </div>
        ))}
      </div>

      <p
        ref={paraRef}
        className="w-full max-w-[90%] mt-10 font-light font-[play] text-2xl sm:text-3xl lg:text-5xl text-[#ffffff17] text-center"
      >
        A creative gallery where photos hang as if suspended in mid-air—each
        image clipped with care to evoke a sense of charm and nostalgia.
      </p>

      {/* Hanging Images */}
      <div
        ref={hangContainerRef}
        className="relative mt-20 w-full max-w-4xl h-[200px] sm:h-[300px] overflow-visible px-4"
      >
        <svg
          viewBox="0 0 700 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 100 Q 175 10 350 100 T 700 100"
            stroke="#ffffff55"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {[
          "https://i.pinimg.com/1200x/ac/33/f9/ac33f96aeadbbf6884b16ac021eab274.jpg",
          "https://i.pinimg.com/736x/49/78/ff/4978ff8fbbbfd24fd13f8add983389ba.jpg",
          "https://i.pinimg.com/736x/a5/55/88/a555883f8b71ce1d24b138ca41304db9.jpg",
          "https://i.pinimg.com/736x/4b/1f/04/4b1f04ffc3e2043494ffb62263abbf92.jpg",
        ].map((img, i) => (
          <div
            key={i}
            ref={(el) => (hangImageRefs.current[i] = el)}
            className="absolute w-[80px] lg:w-[200px] h-[120px] lg:h-[200px] bg-white border-4 border-white rounded shadow-lg"
            style={{
              left: `calc(${hangPoints[i].x}px + 10vw)`,
              top: `${hangPoints[i].y + 80}px`,
              transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)`,
              transformOrigin: "top center",
            }}
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl">📎</span>
            <img src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
