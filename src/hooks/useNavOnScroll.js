import { useContext, useEffect, useRef, useState } from "react";
import { dirContext } from "../context/dirContext";
import { useLocation, useNavigate } from "react-router";

export const useNavOnScroll = () => {
  const { dir, setDir } = useContext(dirContext);

  const dispatch = (dir) => {
    setDir(dir);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const [canNavigate, setCanNavigate] = useState(true);
  const ref = useRef();
  const [loc, setLoc] = useState("/");
  const pages = ["/", "/about", "/skills", "/portfolio", "/contact"];
  useEffect(() => {
    const handleScroll = (event) => {
      if (canNavigate) {
        const delta = Math.max(
          -1,
          Math.min(1, event.wheelDelta || -event.detail)
        );
        // Set the canNavigate state to false to prevent navigating for the next 500ms
        setCanNavigate(false);

        // dispatch(delta);

        if (delta > 0) {
          navigate(pages[pages.indexOf(location.pathname) - 1]);
        } else {
          if (pages.indexOf(location.pathname) !== pages.length - 1) {
            navigate(pages[pages.indexOf(location.pathname) + 1]);
          }
        }

        // Set the canNavigate state to true after 500ms
        setTimeout(() => {
          setCanNavigate(true);
        }, 1000);
      }
    };

    const handleTouchStart = (event) => {
      // Retrieve the initial touch position
      const touchStartY = event.changedTouches[0].clientY;
      // Store it in a ref
      ref.current.touchStartY = touchStartY;
    };

    const handleTouchEnd = (event) => {
      if (canNavigate) {
        // Retrieve the final touch position
        const touchEndY = event.changedTouches[0].clientY;
        // Calculate the vertical distance traveled
        const deltaY = touchEndY - ref.current.touchStartY;

        // Set the canNavigate state to false to prevent navigating for the next 500ms
        setCanNavigate(false);

        // Determine the direction based on the vertical distance
        if (deltaY > 0) {
          // Swiped down, navigate to the previous page
          navigate(pages[pages.indexOf(location.pathname) - 1]);
        } else {
          // Swiped up, navigate to the next page if not on the last page
          if (pages.indexOf(location.pathname) !== pages.length - 1) {
            navigate(pages[pages.indexOf(location.pathname) + 1]);
          }
        }

        // Set the canNavigate state to true after 500ms
        setTimeout(() => {
          setCanNavigate(true);
        }, 1000);
      }
    };

    window.addEventListener("mousewheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    window.addEventListener("mousewheel", handleScroll);

    setLoc(location.pathname);
    return () => {
      window.removeEventListener("mousewheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [canNavigate, location, navigate, pages]);
  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove("active");
    }, 1000);
    return () => {
      ref.current.classList.add("active");
    };
  }, [loc]);
  return ref;
};
