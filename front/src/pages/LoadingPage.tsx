import { useEffect } from "react";
import { animate, stagger } from "framer-motion";
import "../pagesStyle/LoadingPage.css";

export default function LoadingPage() {
  useEffect(() => {
    const dots = document.querySelectorAll(".dot");

    animate(
      dots,
      { y: -30 },
      {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: stagger(0.2),
      }
    );
  }, []);

  return (
    <div className="loading-wrapper">
      <img
        src="/assets/airHeart.png"
        alt="Tindair Logo"
        className="logo"
      />

      <div className="container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
}
