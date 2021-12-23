import { useRef } from "react";
import "./Start.css";
export default function Start({ setUserName }) {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="Start">
      <input
        placeholder="Enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
