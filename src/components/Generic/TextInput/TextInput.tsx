// STYLES
import "./TextInput.less";

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
const TextInput: React.FC<IProps> = (props) => {
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
