import { BsClockFill } from "react-icons/bs";

const QuestionCard = () => {
  return (
    <>
      <div className="question__header d-flex space-bw ">
        <span className="txt-2xl">Question : 3/5</span>
        <span className="danger txt-bold d-flex align-center gap-1">
          <BsClockFill />
          <span>00:20</span>
        </span>
      </div>
      <div className="question__body mx-1">
        <p className="txt-3xl txt-bold my-1">
          What was the name of the college where Rancho and Chatur studied ?
        </p>
        <ul>
          <li>
            <button className="btn btn-primary-outline py-1 ">
              Hyper Text Markup Language
            </button>
          </li>
          <li>
            <button className="btn btn-primary-outline">
              Hyper Text Markup Language
            </button>
          </li>
          <li>
            <button className="btn btn-primary-outline">
              Hyper Text Markup Language
            </button>
          </li>
          <li>
            <button className="btn btn-primary-outline">
              Hyper Text Markup Language
            </button>
          </li>
        </ul>
      </div>
      <div className="question__footer d-flex space-bw">
        <button className="txt-bold btn btn-primary">Prev</button>
        <button className="txt-bold bold btn btn-primary">Next </button>
      </div>
    </>
  );
};

export { QuestionCard };
