import "./questions.css";
import { QuestionCard } from "../../components";

const Question = () => {
  return (
    <main>
      <h2 className="mb-2 txt-bold">HTML Quiz</h2>
      <section className="question__wrapper d-flex col gap-2">
        <QuestionCard />
      </section>
    </main>
  );
};

export { Question };
