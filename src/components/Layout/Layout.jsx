import { Outlet } from "react-router";
import { useNavOnScroll } from "../../hooks/useNavOnScroll";

const Layout = () => {
  const ref = useNavOnScroll();
  return (
    <div className="layout">
      <section className="sec content">
        <Outlet />
      </section>
      <section className="sec global"></section>
      <section className="sec navigation"></section>
      <section className="sec change_effect" ref={ref}>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </div>
  );
};

export default Layout;
