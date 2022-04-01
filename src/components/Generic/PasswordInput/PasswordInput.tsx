// STYLES
import "./PasswordInput.css";

// INTERFACE
interface IProps {
  label: string;
  value: string;
  handleChange: any;
  placeholder: string;
  error: string;
  name: string;
  type?: string;
}

// FUNCTION
const PasswordInput: React.FC<IProps> = (props) => {
  const {
    label,
    value,
    handleChange,
    type = "password",
    placeholder,
    error,
    name,
  } = props;

  return (
    <div className="passwordInputs">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <span>{error}&nbsp;</span>
    </div>
  );
};

export default PasswordInput;
