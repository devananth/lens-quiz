type FormButtonProps = {
  btnText : string;
  btnType : string;
  btnClickHandler : () => void;
}

const FormButton = ({ btnText, btnClickHandler, btnType } : FormButtonProps) => {
  return (
    <button
      className={`btn ${btnType} w-100 txt-bold mb-1`}
      type="submit"
      onClick={btnClickHandler}
    >
      {btnText}
    </button>
  );
};

export { FormButton };
