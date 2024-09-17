import { useState, useEffect, useRef } from "react";

function useSectionInView(selector) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [selector]);

  return { ref, isInView };
}

export default useSectionInView;
