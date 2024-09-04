import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frames = { currentIndex: 0, maxIndex: 382 };
  const images: HTMLImageElement[] = [];
  let imageloaded = 0;

  // Preload images function
  const preloadImages = () => {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `/images/frame_${i.toString().padStart(4, "0")}.jpeg`; // Update path and extension if needed
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        imageloaded++;
        if (imageloaded === frames.maxIndex) {
          console.log("All images are loaded.");
          loadImages(frames.currentIndex);
          startAnimation();
        }
      };
      images.push(img);
      img.onerror = () => {
        console.error(`Failed to load image: ${imageUrl}`);
      };
    }
  };

  // Function to load images onto the canvas
  const loadImages = (index: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = images[index];

    if (!context || !img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    frames.currentIndex = index;
  };

  // Start animation with GSAP
  const startAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: 2,
          end: "bottom bottom",
          // markers: true, // Uncomment to show scroll trigger markers for debugging
        },
      })
      .to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: () => loadImages(Math.floor(frames.currentIndex)),
      });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className="w-full bg-zinc-900">
      <div className="w-full h-[700vh] bg-zinc-800 relative left-0 top-0 parent">
        <div className="w-full h-screen sticky top-0 left-0 cnav">
          <canvas ref={canvasRef} className="w-full h-screen"></canvas>
        </div>
      </div>
    </div>
  );
};

export default CanvasAnimation;
