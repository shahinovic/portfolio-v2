import { SiFalcon } from "react-icons/si";
import useResize from "../../hooks/useResize";
import MainBtn from "../MainBtn/MainBtn";

const Landing = () => {
  const point = useResize();
  console.log("🚀 ~ Landing ~ point:", point);
  return (
    <section className="sec landing">
      <div
        className={`inner vh-100 d-flex flex-column justify-content-center `}
      >
        <p className="text_main">Hi, my name is</p>
        <h1 className="text_main">Ahmed Shahin</h1>
        <p className="text_main">I build things for the web</p>
        <p className="text_sub">
          I’m a software engineer specializing in building exceptional digital
          experiences
        </p>
        <MainBtn
          // href="https://www.google.com/"
          Icon={SiFalcon}
          style={{
            width: "100px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        />
      </div>
    </section>
  );
};

export default Landing;
