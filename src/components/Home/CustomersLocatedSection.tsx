import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import worldMap from "../../assets/world-map.png";

function CustomersLocatedSection() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const aspectRatio = 2; // Width / Height
    canvas.width = containerWidth;
    canvas.height = containerWidth / aspectRatio;

    const image = new Image();
    image.src = worldMap;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      animateLocations();
    };

    const countryLocations = [
      { country: "USA", x: 0.2, y: 0.3 },
      { country: "Brazil", x: 0.3, y: 0.6 },
      { country: "UK", x: 0.45, y: 0.24 },
      { country: "India", x: 0.69, y: 0.46 },
      { country: "Australia", x: 0.8, y: 0.7 },
    ];

    function animateLocations() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      countryLocations.forEach((location, index) => {
        const time = Date.now() * 0.001 + index * 1000;
        const size = Math.sin(time) * 5 + 10;

        const x = location.x * canvas.width;
        const y = location.y * canvas.height;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(var(--primary))";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.strokeStyle = "hsl(var(--primary) / 0.5)";
        ctx.stroke();

        // Add country name
        ctx.font = `${canvas.width * 0.012}px Arial`;
        ctx.fillStyle = "hsl(var(--foreground))";
        ctx.fillText(location.country, x + 15, y + 15);
      });

      requestAnimationFrame(animateLocations);
    }
  }, [containerWidth]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className="text-foreground lg:py-16 py-5 px-3 lg:px-20"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:text-4xl text-xl font-bold text-center mb-8 text-primary"
      >
        Our Global Reach
      </motion.h2>
      <div className="w-full" ref={containerRef}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <canvas ref={canvasRef} className="w-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CustomersLocatedSection;
