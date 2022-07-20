import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers";

const initialState = {
  currQuestion: 0,
  selectedOptions: {},
  categoryID: "",
};

const QuizContext = createContext(initialState);

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const value = { quizState, quizDispatch };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
