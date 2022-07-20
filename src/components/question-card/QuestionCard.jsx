import { useNavigate, useLocation } from "react-router-dom";
import uuid from "react-uuid";
import { useQuiz } from "../../contexts/quiz-context";
import { quizActions } from "../../reducers";
import { Timer } from "./Timer";

const QuestionCard = ({
  question,
  options,
  totalQuestions,
  currentQuestion,
  selectedAnswer,
}) => {
  const {
    quizState: { selectedOptions },
    quizDispatch,
  } = useQuiz();

  const navigate = useNavigate();

  const location = useLocation();

  const isResultPage = location.pathname === "/results";

  const quitQuizHandler = () => {
    navigate("/");
  };

  const nextQuizHandler = () => {
    if (currentQuestion + 1 === totalQuestions) {
      navigate("/results");
    }
    quizDispatch({
      type: quizActions.SET_CURRENT_QUESTION,
      payload: currentQuestion + 1,
    });
  };

  const optionHandler = (option) => {
    if (!isResultPage) {
      quizDispatch({
        type: quizActions.SET_ANSWERS,
        payload: option,
      });
    }
  };

  const isAnswered = selectedOptions[currentQuestion] !== undefined;

  return (
    <article className="pb-sm">
      <div className="question__header d-flex space-bw">
        <span className="txt-2xl">{`Question : ${
          currentQuestion + 1
        }/${totalQuestions}`}</span>
        <span className="danger txt-bold d-flex align-center gap-1">
          {isResultPage ? (
            <span>
              {isAnswered
                ? selectedAnswer.isRight
                  ? "correct"
                  : "wrong"
                : "Not answered"}
            </span>
          ) : (
            <Timer nextQuizHandler={nextQuizHandler} />
          )}
        </span>
      </div>
      <div className="question__body mx-1">
        <p className="txt-3xl txt-bold my-1">{question}</p>
        <ul>
          {options?.map((option) => {
            let optionStyle = isAnswered
              ? option.value === selectedOptions[currentQuestion].value
                ? "selected"
                : ""
              : "";

            if (isResultPage) {
              if (option.isRight) {
                optionStyle = "correct";
              } else if (
                selectedAnswer &&
                selectedAnswer.value === option.value
              ) {
                optionStyle = "wrong";
              }
            }

            return (
              <li
                key={uuid()}
                onClick={() =>
                  optionHandler({ ...option, questionNo: currentQuestion })
                }
                className="options"
              >
                <button
                  className={`btn btn-primary-outline py-1 ${
                    isResultPage ? "result-page" : ""
                  } ${optionStyle}`}
                  disabled={isResultPage}
                >
                  {option.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {!isResultPage && (
        <div className="question__footer d-flex space-bw">
          <button
            className="txt-bold btn btn-primary bg-danger"
            onClick={quitQuizHandler}
          >
            Quit
          </button>
          <button
            className="txt-bold bold btn btn-primary"
            onClick={nextQuizHandler}
          >
            {currentQuestion + 1 === totalQuestions ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </article>
  );
};

export { QuestionCard };
