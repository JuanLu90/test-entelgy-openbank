// UTILS
import { IInput } from "../../../utils/typescriptUtil";
// STYLES
import "./TextInput.less";

// FUNCTION
const TextInput: React.FC<IInput> = (props) => {
  const { label, value, handleChange, placeholder, error, name } = props;

  return (
    <div className="textInput">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div>
        <span>{error}&nbsp;</span>
        <span> {value.length} / 255</span>
      </div>
    </div>
  );
};

export default TextInput;
