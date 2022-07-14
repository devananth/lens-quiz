import { BsFillTagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 
import "./categoryCard.css";

const CategoryCard = () => {

  const navigate = useNavigate();

  return (
    <article className="category__card__wrapper">
      <div className="img__container">
        <img
          className="img-responsive"
          src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
          alt=""
        />
      </div>
      <div className="content-container d-flex col gap-2 p-1">
        <span className="txt-2xl txt-bold">Check your knowledge in HTML ?</span>
        <span className="d-flex align-center">
          <BsFillTagFill />
          <span>Take this quiz to test yourself</span>
        </span>
        <span className="d-flex align-center">
          <BsFillTagFill />
          <span>5 questions</span>
        </span>
        <button className="btn btn-primary" onClick={() => navigate("/rules")}> Play Now</button>
      </div>
    </article>
  );
};

export { CategoryCard };
