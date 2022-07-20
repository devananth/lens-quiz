import { BsFillTagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { quizActions } from "../../reducers";
import "./categoryCard.css";

const CategoryCard = ({ id, name, imgURL }) => {
  const navigate = useNavigate();

  const { quizDispatch } = useQuiz();

  const categoryHandler = () => {
    navigate(`/rules`);
    quizDispatch({
      type: quizActions.SET_CATEGORY,
      payload: id,
    });
  };

  return (
    <article className="category__card__wrapper">
      <div className="img__container">
        <img
          className="img-responsive"
          src={imgURL}
          alt={`${name} cover pic`}
        />
      </div>
      <div className="content-container d-flex col gap-2 p-1">
        <span className="txt-2xl txt-bold">{`Check your knowledge in ${name} ?`}</span>
        <span className="d-flex align-center">
          <BsFillTagFill />
          <span>Take this quiz to test yourself</span>
        </span>
        <span className="d-flex align-center">
          <BsFillTagFill />
          <span>5 questions</span>
        </span>
        <button className="btn btn-primary" onClick={categoryHandler}>
          Play Now
        </button>
      </div>
    </article>
  );
};

export { CategoryCard };
