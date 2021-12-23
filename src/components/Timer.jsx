import { useEffect, useState } from "react";
import "./Timer.css";
export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const intervel = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervel);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
    if(questionNumber >= 10){
      setTimer(60);
    }
  }, [questionNumber]);

  return timer;
}
