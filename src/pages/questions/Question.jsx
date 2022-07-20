import "./questions.css";
import { QuestionCard } from "../../components";
import { useQuiz } from "../../contexts";
import { quizData } from "../../data";

const Question = () => {
  const {
    quizState: { categoryID, currQuestion },
  } = useQuiz();

  const currentQuizSet = quizData.find((question) => {
    return question.category._id === categoryID;
  });

  const { name: QuizTitle, noOfQuestions, questions } = currentQuizSet;

  return (
    <main>
      <h2 className="mb-2 txt-bold">{QuizTitle}</h2>
      <section className="question__wrapper d-flex col gap-2">
        <QuestionCard
          {...questions[currQuestion]}
          totalQuestions={noOfQuestions}
          currentQuestion={currQuestion}
        />
      </section>
    </main>
  );
};

export { Question };
