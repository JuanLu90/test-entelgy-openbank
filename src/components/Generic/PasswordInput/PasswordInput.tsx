// DEPENDENCES
import { useState } from "react";

// STYLES
import "./PasswordInput.less";

// IMAGES
import closeEyeIcon from "../../../assets/img/closeeye.png";
import openEyeIcon from "../../../assets/img/openeye.png";

// INTERFACE
interface IProps {
  label: string;
  value: string;
  handleChange: any;
  placeholder: string;
  error: string;
  name: string;
}

// FUNCTION
const PasswordInput: React.FC<IProps> = (props) => {
  const { label, value, handleChange, placeholder, error, name } = props;

  const [eyeState, setEyeState] = useState(false);

  return (
    <div className="passwordInputs">
      <label htmlFor="">{label}</label>
      <div>
        <input
          type={eyeState ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={error ? "errorInput" : ""}
        />
        <img
          src={eyeState ? closeEyeIcon : openEyeIcon}
          onClick={() => setEyeState(!eyeState)}
          alt="Show Password"
        />
      </div>

      <span className="errorMessage">{error}&nbsp;</span>
    </div>
  );
};

export default PasswordInput;
