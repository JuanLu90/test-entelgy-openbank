// DEPENDENCES
import { useTranslation } from "react-i18next";

// STYLES
import "./Step3.css";

// IMAGES
import tickGreen from "../../../assets/img/accept.png";
import warningRed from "../../../assets/img/warning.png";

// INTERFACES
interface IProps {
  loading: Boolean;
  response: {
    status: number;
  };
}

// FUNCTION
const Step3: React.FC<IProps> = (props) => {
  const { loading, response } = props;

  const { t } = useTranslation();

  return (
    <div className="step3">
      {loading && <div className="spinner" />}

      {response.status === 200 && (
        <div className="messageInfo">
          <div>
            <img src={tickGreen} alt="Ok" />
          </div>
          <div>
            <span> {t("step3.OK.title")}</span>
            <p> {t("step3.OK.description")}</p>
          </div>
        </div>
      )}

      {response.status === 401 && (
        <div className="messageInfo">
          <div>
            <img src={warningRed} alt="Ok" />
          </div>
          <div>
            <span> {t("step3.KO.title")}</span>
            <p> {t("step3.KO.description")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3;
