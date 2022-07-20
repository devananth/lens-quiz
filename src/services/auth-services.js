import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebaseConfig";

const signUpUser = async (signupForm) => {
  const { email, password } = signupForm;
  return await createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = async (loginForm) => {
  const { email, password } = loginForm;
  return await signInWithEmailAndPassword(auth, email, password);
};

export { signUpUser, loginUser };
