import React, { useState, useRef, useEffect } from "react";
import "./AccordionAbout.css";
import ArrowIcone from "../../Assets/arrow-icone.png";
export default function AccordionAbout({txt, title, children}) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const toggleState = () => {
    setToggle(!toggle);
  };
  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);
  return (
    <div className="accord">
      <div onClick={toggleState} className="accord-visible">
        <h3>{title}</h3>
        <img src={ArrowIcone} alt="chevron" />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accord-toggle animated" : "accord-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
       <>{children}</>
      </div>
    </div>
  );
}
