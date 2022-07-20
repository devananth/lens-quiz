import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer, authActions } from "../reducers";
import { loginUser, signUpUser } from "../services";
import { db, addDoc, collection, signOut, auth } from "../firebaseConfig";

const initialAuthState = {
  email: null,
  uid: null,
  isUserLoggedIn: null,
};

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const { Provider } = AuthContext;

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location?.pathname || "/";

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails) {
      authDispatch({
        type: authActions.SAVE_USER_DETAILS,
        payload: userDetails,
      });
      navigate("/");
    }
  }, []);

  const loginHandler = async (loginForm) => {
    try {
      const response = await loginUser(loginForm);
      authDispatch({
        type: authActions.SAVE_USER_DETAILS,
        payload: {
          email: response?.user?.email,
          uid: response?.user?.uid,
        },
      });
      toast.success("Logged In successfully !");
    } catch (error) {
      console.error(error.message);
    }
    navigate("/");
  };

  const signUpHandler = async (signupForm) => {
    const { firstName, lastName, email } = signupForm;

    try {
      const response = await signUpUser(signupForm);

      const user = response?.user;

      if (user) {
        try {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            email,
            quizesAttempted: [],
          });
          authDispatch({
            type: authActions.SAVE_USER_DETAILS,
            payload: {
              email,
              uid: user.uid,
            },
          });
          toast.success("Signed in successfully !");
          navigate("/");
        } catch (error) {
          console.error(error.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    authDispatch({
      type: authActions.DELETE_USER_DETAILS,
      payload: "",
    });
  };

  const value = {
    authState,
    authDispatch,
    loginHandler,
    signUpHandler,
    logoutHandler,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
