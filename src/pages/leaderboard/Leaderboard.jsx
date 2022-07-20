import { useEffect, useState } from "react";
import { quizData } from "../../data";
import { useAuth } from "../../contexts";
import { db, getDocs, collection } from "../../firebaseConfig";
import uuid from "react-uuid";

const Leaderboard = () => {
  const [userData, setUserData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const {
    authState: { isUserLoggedIn, uid },
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn && uid) {
      (async () => {
        setLoader(true);
        try {
          let response = await getDocs(collection(db, "users"));

          let allUserData = [];

          response.forEach((doc) => {
            allUserData.push(doc.data());
          });
          if (allUserData) {
            setUserData(allUserData);
          }
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoader(false);
        }
      })();
    }
  }, []);

  useEffect(() => {
    let users = [];

    for (const user of userData) {
      for (const quiz of user.quizesAttempted) {
        users.push({ userName: user.firstName + " " + user.lastName, ...quiz });
      }
    }
    users.sort((a, b) => b.score - a.score);
    setUsers(users);
  }, [userData]);

  const getQuizName = (quizId) => {
    return quizData.find((quiz) => quiz._id === quizId).name;
  };

  return loader ? (
    <h2>Loading...</h2>
  ) : (
    <section className="profile__container">
      <h3 className="txt-center mb-1">Leaderboard</h3>
      <ul className="d-flex col gap-2">
        {users.length > 0 &&
          users.map((quiz) => {
            return (
              <li
                className="d-flex space-bw p-sm rounded"
                key={uuid()}
                style={{ border: "1px solid var(--text-color)" }}
              >
                <span className="txt-bold">{quiz.userName}</span>
                <span>{getQuizName(quiz.quizId)}</span>
                <span>{quiz.score}</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export { Leaderboard };
