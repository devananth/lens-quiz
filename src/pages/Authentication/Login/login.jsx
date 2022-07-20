import { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  FormContainer,
  FormInput,
  FormButton,
  PasswordInput,
} from "../../../components";
import { loginFormValidation } from "./loginFormValidation";
import { useDocumentTitle } from "../../../custom-hooks";
import { errorReducer } from "../../../reducers/errorReducer";
import { useAuth } from "../../../contexts";
import { focusHandler } from "../authUtils";

const loginFormInitialErrorState = {
  emailError: null,
  passwordError: null,
};

const Login = () => {
  useDocumentTitle("Login | Lens-Store");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [loginFormErrorState, loginFormErrorDispatch] = useReducer(
    errorReducer,
    loginFormInitialErrorState
  );

  const { loginHandler } = useAuth();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (loginFormValidation(loginForm, loginFormErrorDispatch)) {
      loginHandler(loginForm);
    }
  };

  const loginInputHandler = (event) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const guestLoginHandler = () => {
    setLoginForm(() => ({
      email: "test@gmail.com",
      password: "test@123",
    }));
  };

  const loginFocusHandler = (event) => {
    focusHandler(event, loginFormErrorDispatch);
  };

  return (
    <>
      <section className="d-flex xy-center authentication__wrapper">
        <FormContainer formHeadingText={"Login"} submitHandler={submitHandler}>
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"email"}
            id={uuid()}
            value={loginForm.email}
            inputHandler={loginInputHandler}
            required={true}
            error={loginFormErrorState.emailError}
            focusHandler={loginFocusHandler}
          />
          <PasswordInput
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            value={loginForm.password}
            inputHandler={loginInputHandler}
            error={loginFormErrorState.passwordError}
            focusHandler={loginFocusHandler}
          />

          <div className="d-flex space-bw wrap">
            <div className="form-group width-content d-flex y-center gap-1">
              <input type="checkbox" className="form-input" id="rememberMe" />
              <label
                className="form-label txt-sm d-inline-block"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <Link
              to={"#"}
              className="mb-1 txt-bold txt-sm d-inline-block txt-primary"
            >
              Forgot your password?
            </Link>
          </div>

          <FormButton
            btnText={"Login"}
            btnClickHandler={submitHandler}
            btnType={"btn-primary"}
          />

          <FormButton
            btnText={"Guest Login"}
            btnClickHandler={guestLoginHandler}
            btnType={"btn-primary-outline"}
          />

          <div>
            <span className="txt-bold">Not a user yet ?</span>
            <Link to={"/signup"} className="btn btn-link btn-link-primary">
              Create New Account
            </Link>
          </div>
        </FormContainer>
      </section>
    </>
  );
};

export { Login };
