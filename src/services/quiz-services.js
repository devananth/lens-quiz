import { getDocs, updateDoc, doc } from "firebase/firestore";
import { auth, db, collection } from "../firebaseConfig";

const getUserDetails = async () => {
  const currUser = auth.currentUser;

  const usersRef = collection(db, "users");

  let userData = {};

  try {
    const queryResponse = await getDocs(usersRef);

    queryResponse.forEach((doc) => {
      if (doc.data().uid === currUser?.uid) {
        userData = { dataId: doc.id, data: { ...doc.data() } };
      }
    });
  } catch (error) {
    console.error(error.message);
  } finally {
    return userData;
  }
};

const addScore = async ({ quizId, score }) => {
  const userData = await getUserDetails();

  const isQuizFound = userData?.data?.quizesAttempted.find(
    (quiz) => quiz.quizId === quizId
  );

  if (isQuizFound) {
    await updateDoc(doc(db, "users", userData?.dataId), {
      quizesAttempted: userData?.data?.quizesAttempted.map((quiz) => {
        if (quiz.quizId === quizId) return { ...quiz, score };
        else return quiz;
      }),
    });
  } else {
    console.log(userData.data.quizesAttempted, { quizId, score });
    await updateDoc(doc(db, "users", userData.dataId), {
      quizesAttempted: userData.data.quizesAttempted.concat({ quizId, score }),
    });
  }
};

export { addScore, getUserDetails };
