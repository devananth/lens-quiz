import "./auth.css";

type FormContainerProps = {
  children? : React.ReactNode;
  submitHandler : () => void;
  formHeadingText : string;
}

const FormContainer = ({ children, submitHandler, formHeadingText }:FormContainerProps) => {
  return (
    <form
      className="form authentication__container box-shadow"
      onSubmit={submitHandler}
    >
      <h5 className="txt-center txt-bold">{formHeadingText}</h5>
      {children}
    </form>
  );
};

export { FormContainer };
