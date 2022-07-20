import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  const rulesHandler = () => {
    navigate(`/question`);
  };

  return (
    <main>
      <section className="rules__wrapper d-flex col xy-center gap-2">
        <h2 className="txt-center">Rules</h2>
        <ul>
          <li>
            You will get 30 seconds to select an option for each question.
          </li>
          <li>
            Otherwise that question will be skipped and points will not be
            considered.
          </li>
          <li>Each right answer scores 10 points.</li>
          <li>Each multiple choice has only one correct answer.</li>
          <li>To win the quiz you need to score more than 60%.</li>
        </ul>
        <button className="btn btn-primary" onClick={rulesHandler}>
          Start Quiz
        </button>
      </section>
    </main>
  );
};

export { Rules };
