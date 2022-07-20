import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import uuid from "react-uuid";
import { QuestionCard } from "../../components";
import { useAuth, useQuiz } from "../../contexts";
import { quizData } from "../../data";
import { countCorrectAnswers } from "../../utils";
import { addScore } from "../../services";
import "./results.css";

const Results = () => {
  const {
    quizState: { categoryID, selectedOptions },
  } = useQuiz();

  const {
    authState: { uid, isUserLoggedIn },
  } = useAuth();

  const navigate = useNavigate();

  const currentQuizSet = quizData.find((question) => {
    return question.category._id === categoryID;
  });

  const { _id: quizId, noOfQuestions, questions } = currentQuizSet;

  const correctAnswers = countCorrectAnswers(selectedOptions);

  useEffect(() => {
    if (isUserLoggedIn && uid) {
      if (selectedOptions.length === 0) {
        navigate("/");
      } else {
        addScore({ quizId, score: correctAnswers * 10 });
      }
    }
  }, []);

  return (
    <main>
      <section className="result__container">
        <header className="result__header d-flex col gap-2 m-1">
          <h2>Your results</h2>
          <h4>{`Your score : ${correctAnswers}/5`}</h4>
        </header>
        <div className="result__main d-flex col gap-3">
          {questions.map((question, index) => {
            return (
              <QuestionCard
                key={uuid()}
                {...question}
                totalQuestions={noOfQuestions}
                currentQuestion={index}
                selectedAnswer={selectedOptions[index]}
              />
            );
          })}
        </div>
        <footer className="result__footer">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to home
          </button>
        </footer>
      </section>
    </main>
  );
};

export { Results };
