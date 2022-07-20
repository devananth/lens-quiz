import { useEffect } from "react";
import { CategoryCard } from "../components";
import { useQuiz } from "../contexts";
import { quizData } from "../data";
import { quizActions } from "../reducers";

const Home = () => {
  const categories = quizData.map((quiz) => quiz.category);

  const { quizDispatch } = useQuiz();

  useEffect(() => {
    quizDispatch({
      type: quizActions.RESET,
      payload: "",
    });
  }, []);

  return (
    <main>
      <section className="d-flex col gap-2 mx-auto wrap xy-center">
        <h2>Categories</h2>
        <div className="d-flex gap-3 xy-center wrap">
          {categories.map(({ _id, name, imgURL }) => (
            <CategoryCard key={_id} id={_id} name={name} imgURL={imgURL} />
          ))}
        </div>
      </section>
    </main>
  );
};

export { Home };
