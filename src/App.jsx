import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
function App() {
  return (
    <Navbar>
      <span className="heading">
        Animated DropDown By Ulkesh Using React and CSSTransition
      </span>
      <NavItem icon="๐" />
      <NavItem icon="๐" />
      <NavItem icon="๐" />

      <NavItem icon="๐">
        <DropDown />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-navs">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
function DropDown() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const Height = el.offsetHeight;
    setMenuHeight(Height);
  }

  function DropDownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="drop-down" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="๐งก" goToMenu={"settings"}>
            My Profile
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="๐" goToMenu="main" />
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
          <DropDownItem leftIcon="๐" rightIcon="๐ถ">
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export default App;
