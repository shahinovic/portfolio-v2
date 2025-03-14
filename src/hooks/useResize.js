import { useEffect, useState } from "react";

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useResize;

// const breakpoints = {
//   xs: 576,
//   sm: 768,
//   md: 992,
//   lg: 1200,
//   xl: 1400,
// };
