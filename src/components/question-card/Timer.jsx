import { BsClockFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useQuiz } from "../../contexts";

const Timer = ({ nextQuizHandler }) => {
  const [timer, setTimer] = useState(() => 20);

  const {
    quizState: { currQuestion },
  } = useQuiz();

  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      nextQuizHandler();
    }
  }, [timer]);

  useEffect(() => {
    setTimer(() => 20);
  }, [currQuestion]);

  return (
    <span className="danger txt-bold d-flex align-center gap-1">
      <BsClockFill />
      <span>{`00:${timer.toString().padStart(2, 0)}`}</span>
    </span>
  );
};

export { Timer };
