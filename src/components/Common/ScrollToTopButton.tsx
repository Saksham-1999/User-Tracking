import { ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={scrollToTop}
        className="w-0 h-0 
      border-l-[20px] border-l-transparent
      border-r-[20px] border-r-transparent
      border-b-[40px] border-b-primary
      hover:border-b-primary-dark transition-colors duration-300 relative"
        aria-label="Scroll to top"
      >
        <span className="sr-only">Scroll to top</span>
        <ChevronsUp className="text-secondary absolute -bottom-9 -right-3" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
