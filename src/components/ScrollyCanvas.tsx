"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img.complete || img.naturalWidth === 0) return;

    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Draw the first frame on load
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const checkFirstFrame = setInterval(() => {
        if (images[0].complete) {
          renderFrame(0);
          clearInterval(checkFirstFrame);
        }
      }, 50);
      return () => clearInterval(checkFirstFrame);
    }
  }, [images]);

  // Create a transform mapping 0-1 to 0-119
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.floor(latest));
  });

  // Resize canvas to fill screen
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.floor(frameIndex.get()));
      }
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
    />
  );
}
