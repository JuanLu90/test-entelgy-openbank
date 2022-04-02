// DEPENDENCES
import { useTranslation } from "react-i18next";

// UTILS
import { IStep3 } from "../../../utils/typescriptUtil";

// STYLES
import "./Step3.less";

// IMAGES
import tickGreen from "../../../assets/img/accept.png";
import warningRed from "../../../assets/img/warning.png";

// FUNCTION
const Step3: React.FC<IStep3> = (props) => {
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
          <div className="message">
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
          <div className="message">
            <span> {t("step3.KO.title")}</span>
            <p> {t("step3.KO.description")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3;
