"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]">
      <div
        className="h-full transition-all duration-150 ease-out rounded-r-full"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #b8772f, #bf8138, #d6a15c)",
        }}
      />
    </div>
  );
}

