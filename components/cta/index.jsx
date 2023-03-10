import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import useAnimatedBackground from "../../hooks/useAnimatedBackground";
import profilePicture from "../../public/images/cta/profile-pic.png";

const CTA = () => {
  const imageRef = useRef(undefined);
  const textRef = useRef(undefined);
  const emojiRef = useRef(undefined);

  const animatedBackgroundRef = useRef(undefined);
  useAnimatedBackground(animatedBackgroundRef);

  useEffect(() => {
    imageRef.current
      .animate(
        [
          { opacity: 0, transform: "translateY(-2rem)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 1000,
          iterations: 1,
          fill: "forwards",
          easing: "ease",
          delay: 1000,
        }
      )
      .pause();

    textRef.current.animate(
      [
        { opacity: 0, transform: "translateY(-2rem)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 1000,
        iterations: 1,
        easing: "ease",
        fill: "both",
      }
    );

    imageRef.current.getAnimations({ subtree: true }).forEach((animation) => {
      animation.finished.then(() => {
        const { target } = animation.effect;
        target.classList.remove("opacity-0");
        target.classList.add("opacity-100", "translate-y-0");
      });

      animation.play();
    });

    textRef.current.getAnimations({ subtree: true }).forEach((animation) => {
      animation.finished.then(() => {
        const { target } = animation.effect;
        target.classList.remove("opacity-0");
        target.classList.add("opacity-100", "translate-y-0");
      });

      animation.play();
    });

    return () => {};
  }, []);

  return (
    <>
      <div
        ref={animatedBackgroundRef}
        className="absolute -z-10 w-[calc(100%+64px)] grid auto-rows-[32px] "
      >
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
        <div className="dotted-background "></div>
      </div>

      <div className="max-w-screen-lg py-14 sm:py-20 px-10 flex flex-col items-center sm:flex-row sm:justify-center mx-auto gap-8 sm:gap-2 ">
        <div
          ref={imageRef}
          className="w-[80%] grow sm:w-full shrink overflow-hidden sm:basis-1/3 opacity-0"
        >
          <Image
            src={profilePicture}
            alt="Profilbilde"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, (max-width: 1024px) 40vw, (max-width: 1536px) 33vw, 20vw"
            className="filter grayscale rounded-full"
            priority
            draggable={false}
          />
        </div>
        <div
          ref={textRef}
          className="flex-1 sm:basis-1/2 flex flex-col items-center gap-4 md:gap-8 tracking-wide bg-th-background group opacity-0"
        >
          <h1 className="flex justify-center gap-4 text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold sm:font-extrabold">
            <span ref={emojiRef} className="group-hover:animate-wiggle">
              ????
            </span>{" "}
            Hei p?? deg
          </h1>
          <p className="text-base xs:text-xl text-center w-fit font-medium ">
            Jeg er student ved USN og g??r IT og ledelse. Ta en titt p??
            prosjektene mine nedenfor
          </p>
        </div>
      </div>
    </>
  );
};

export default CTA;
