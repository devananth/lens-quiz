import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  FormContainer,
  FormInput,
  FormButton,
  PasswordInput,
} from "../../../components";
import { useState, useReducer } from "react";
import { useDocumentTitle } from "../../../custom-hooks";
import { focusHandler } from "../authUtils";
import { signupFormValidation } from "./signupFormValidation";
import { errorReducer } from "../../../reducers/errorReducer";
import { useAuth } from "../../../contexts";

const signupFormInitialErrorState = {
  emailError: null,
  passwordError: null,
  firstNameError: null,
};

const SignUp = () => {
  useDocumentTitle("SignUp | Lens-Store");

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { signUpHandler } = useAuth();

  const [signupFormErrorState, signupFormErrorDispatch] = useReducer(
    errorReducer,
    signupFormInitialErrorState
  );

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (signupFormValidation(signupForm, signupFormErrorDispatch)) {
      signUpHandler(signupForm);
      navigate("/");
    }
  };

  const signupInputHandler = (event) => {
    setSignupForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const signupFocusHandler = (event) => {
    focusHandler(event, signupFormErrorDispatch);
  };

  return (
    <>
      <section className="d-flex xy-center authentication__wrapper">
        <FormContainer formHeadingText={"SignUp"} submitHandler={submitHandler}>
          <FormInput
            label={"First Name"}
            type={"text"}
            placeholder={"John"}
            name={"firstName"}
            id={uuid()}
            inputHandler={signupInputHandler}
            required={true}
            error={signupFormErrorState.firstNameError}
            focusHandler={signupFocusHandler}
          />
          <FormInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Doe"}
            name={"lastName"}
            id={uuid()}
            inputHandler={signupInputHandler}
            focusHandler={signupFocusHandler}
          />
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"email"}
            id={uuid()}
            inputHandler={signupInputHandler}
            required={true}
            error={signupFormErrorState.emailError}
            focusHandler={signupFocusHandler}
          />
          <PasswordInput
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            inputHandler={signupInputHandler}
            error={signupFormErrorState.passwordError}
            focusHandler={signupFocusHandler}
          />

          <div className="form-group width-content d-flex y-center gap-1">
            <input
              type="checkbox"
              className="form-input"
              id="declaration"
              required
            />
            <label
              className="form-label txt-bold txt-sm d-inline-block"
              htmlFor="declaration"
            >
              I accept all Terms and Conditions
            </label>
          </div>

          <FormButton
            btnText={"Create New Account"}
            btnClickHandler={submitHandler}
            btnType="btn-primary"
          />

          <div>
            <span className="txt-bold">Already have an account ?</span>
            <Link
              to={"/login"}
              className="btn txt-bold btn-link btn-link-primary"
            >
              Login Here
            </Link>
          </div>
        </FormContainer>
      </section>
    </>
  );
};

export { SignUp };
