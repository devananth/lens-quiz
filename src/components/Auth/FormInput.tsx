type FormInputProps = {
  label : string;
  type : string;
  name : string;
  id : string;
  placeholder : string;
  value : string;
  inputHandler : () => void;
  required : boolean;
  error : boolean;
  focusHandler : () => void;
}


const FormInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  inputHandler,
  required = false,
  error,
  focusHandler,
}:FormInputProps) => {
  return (
    <div className="form-group">
      <label
        className={`form-label txt-sbold ${required && "form-input-required"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={inputHandler}
        required={required}
        onFocus={focusHandler}
      />
      {error && (
        <span className={`danger mt-sm ${error ? "d-block" : "d-none"}`}>
          <i className="fas fa-exclamation-circle"></i>
          {error}
        </span>
      )}
    </div>
  );
};

export { FormInput };
