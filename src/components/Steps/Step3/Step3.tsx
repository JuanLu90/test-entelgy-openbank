interface IProps {
  loading: Boolean;
}

// FUNCTION
const Step3: React.FC<IProps> = (props) => {
  const { loading } = props;

  return (
    <div>
      Third Component
      <br />
      {loading ? "Cargando..." : "Done!"}
    </div>
  );
};

export default Step3;
