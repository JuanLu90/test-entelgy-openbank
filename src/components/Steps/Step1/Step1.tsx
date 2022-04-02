// DEPENDENCES
import { useTranslation } from "react-i18next";

// STYLES
import "./Step1.less";

// IMAGES
import brainImage from "../../../assets/img/group.svg";
import lockImage from "../../../assets/img/group-3.svg";

// FUNCTION
const Step1: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="step1">
      <article className="step1__boxes">
        <section>
          <img src={brainImage} alt="brain" />
          <p>{t("step1.brainDescription")}</p>
        </section>
        <section>
          <img src={lockImage} alt="lock" />
          <p>{t("step1.lockDescription")}</p>
        </section>
      </article>
      <article className="step1__howWorks">
        <h4>{t("step1.howWorks.title")}</h4>
        <p>{t("step1.howWorks.description")}</p>
      </article>
      <article className="step1__saveData">
        <h4>{t("step1.saveData.title")}</h4>
        <p>{t("step1.saveData.description")}</p>
      </article>
    </div>
  );
};

export default Step1;
