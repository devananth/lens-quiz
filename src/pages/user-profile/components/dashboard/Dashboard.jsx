import { useEffect, useState } from "react";
import { getUserDetails } from "../../../../services";
import { useAuth } from "../../../../contexts";
import { quizData } from "../../../../data";

const Dashboard = () => {
  const [attemptedQuizes, setAttemptedQuizes] = useState([]);

  const [loader, setLoader] = useState(false);

  const {
    authState: { isUserLoggedIn, uid },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn && uid) {
      (async () => {
        setLoader(true);
        try {
          let userData = await getUserDetails();
          if (userData) {
            setAttemptedQuizes(userData.data.quizesAttempted);
          }
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoader(false);
        }
      })();
    }
  }, []);

  const getQuizName = (quizId) => {
    return quizData.find((quiz) => quiz._id === quizId).name;
  };

  return loader ? (
    <h2>Loading</h2>
  ) : (
    <div className="profile__body ml-2">
      {attemptedQuizes.length === 0 ? (
        <h3>No quiz attempted yet !</h3>
      ) : (
        attemptedQuizes.map((quiz) => {
          return (
            <div className="d-flex space-bw ">
              <span>{getQuizName(quiz.quizId)}</span>
              <span>{quiz.score}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export { Dashboard };
