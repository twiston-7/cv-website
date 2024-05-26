import { useEffect } from "react";
import "./initial-view.css";

function InitialView() {
  useEffect(() => {
    const left = document.getElementById("left-side");

    const handleOnMove = (e: MouseEvent | Touch) => {
      if (left) {
        left.style.width = `${e.clientX / window.innerWidth * 100}%`;
      }
    }

    // PC support
    document.onmousemove = e => handleOnMove(e);

    // Mobile support
    document.ontouchmove = e => handleOnMove(e.touches[0]);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      document.onmousemove = null;
      document.ontouchmove = null;
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

  return (
    <>
      <title>Home</title>

      <div className="side" id="left-side">
        <h1>
          Welcome!<br />
          I am <span className="fancy">Nick</span>
        </h1>
      </div>
      <div className="side" id="right-side">
        <h1>
          Welcome!<br />
          I am <span className="fancy">Twiston</span>
        </h1>
      </div>
    </>
  );
}

export default InitialView;
