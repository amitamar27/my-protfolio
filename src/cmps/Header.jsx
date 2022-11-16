import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header({ callBack }) {
  const [toggle, setToggle] = useState(false);

  const changeMenu = () => {
    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    callBack(toggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const hideNavbar = () => {
    setToggle((toggle) => (toggle = false));
  };

  const logo = process.env.PUBLIC_URL + "/imgs/logoNew.png";

  return (
    <div className="header">
      <div className="nav-bar">
        <img src={logo} alt="" />
        <ul className={toggle ? "show" : "hide"}>
          <NavLink onClick={hideNavbar} to="/" className="nav-link" end>
            Home
          </NavLink>

          <NavLink onClick={hideNavbar} to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink onClick={hideNavbar} to="/projects" className="nav-link">
            Projects
          </NavLink>
        </ul>
        <div onClick={changeMenu} className="hamburger">
          <div className={toggle ? "bar1 change" : "bar1"}></div>
          <div className={toggle ? "bar2 change" : "bar2"}></div>
          <div className={toggle ? "bar3 change" : "bar3"}></div>
        </div>
      </div>
    </div>
  );
}
