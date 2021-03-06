// DEPENDENCES
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import PasswordInputs from "../../Generic/PasswordInput/PasswordInput";
import TextInput from "../../Generic/TextInput/TextInput";

// UTILS
import { IStep2 } from "../../../utils/typescriptUtil";

// STYLES
import "./Step2.less";

// FUNCTION
const Step2: React.FC<IStep2> = (props) => {
  const { t } = useTranslation();

  const {
    credentials,
    setCredentials,
    initialCredentials,
    errorState,
    handleChange,
    setErrorState,
  } = props;

  useEffect(() => {
    return () => {
      setCredentials(initialCredentials);
      setErrorState(initialCredentials);
    };
  }, []);

  return (
    <div className="step2">
      <article className="step2__password">
        <p>{t("step2.description")}</p>
        <section>
          <PasswordInputs
            label={t("step2.passwordTitle")}
            placeholder={t("step2.password")}
            error={errorState.password}
            value={credentials.password}
            name="password"
            handleChange={handleChange}
          />
          <PasswordInputs
            label={t("step2.confirmPasswordTitle")}
            placeholder={t("step2.confirmPassword")}
            error={errorState.confirmPassword}
            value={credentials.confirmPassword}
            name="confirmPassword"
            handleChange={handleChange}
          />
        </section>
      </article>
      <article className="step1__clue">
        <p>{t("step2.description2")}</p>
        <TextInput
          label={t("step2.clueTitle")}
          placeholder={t("step2.clue")}
          error={errorState.clue}
          value={credentials.clue}
          name="clue"
          handleChange={handleChange}
        />
      </article>
    </div>
  );
};

export default Step2;
