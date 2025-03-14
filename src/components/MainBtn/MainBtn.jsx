// import {
//   SiFalcon,
//   SiFalco,
//   SiFampay,
//   SiFauna,
//   SiFarfetch,
//   SiFluentd,
//   SiFacebook,
//   SiFirebase,
//   SiFacebookgaming,
// } from "react-icons/si";

import { useAnimate } from "framer-motion";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const getNearestSide = (e) => {
  const box = e.target.getBoundingClientRect();

  const proximityToLeft = {
    proximity: Math.abs(box.left - e.clientX),
    side: "left",
  };
  const proximityToRight = {
    proximity: Math.abs(box.right - e.clientX),
    side: "right",
  };
  const proximityToTop = {
    proximity: Math.abs(box.top - e.clientY),
    side: "top",
  };
  const proximityToBottom = {
    proximity: Math.abs(box.bottom - e.clientY),
    side: "bottom",
  };

  const sortedProximity = [
    proximityToLeft,
    proximityToRight,
    proximityToTop,
    proximityToBottom,
  ].sort((a, b) => a.proximity - b.proximity);

  return sortedProximity[0].side;
};

const MainBtn = ({ href, Icon, style }) => {
  const [scope, animate] = useAnimate();
  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };
  return (
    <div
      className="box"
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      onClick={() => href && window.open(href, "_blank")}
      style={{
        ...style,
      }}
    >
      <Icon />
      <div
        ref={scope}
        className="hover_box"
        style={{ clipPath: BOTTOM_RIGHT_CLIP, ...style }}
      >
        <Icon />
      </div>
    </div>
  );
};

export default MainBtn;
