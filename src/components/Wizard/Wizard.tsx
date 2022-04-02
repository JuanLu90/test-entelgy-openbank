// DEPENDENCES
import { useState } from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// UTILS
import { validatePassword, validateClue } from "../../utils/validationUtil";
import { submitForm } from "../../services/api";

// STYLES
import "./Wizard.less";

// INTERFACE
interface ICredentials {
  password: string;
  confirmPassword: string;
  clue: string;
}

interface IStep {
  position: number;
  isDone: boolean;
}

interface IResponse {
  status: number;
}

// FUNCTION
const Wizard: React.FC = () => {
  const { t } = useTranslation();

  const initialCredentials: ICredentials = {
    password: "",
    confirmPassword: "",
    clue: "",
  };

  const [credentials, setCredentials] =
    useState<ICredentials>(initialCredentials);

  const [errorState, setErrorState] =
    useState<ICredentials>(initialCredentials);

  const [loading, setLoading] = useState<Boolean>(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setCredentials((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const [steps, setSteps] = useState<IStep[]>([
    {
      position: 1,
      isDone: false,
    },
    {
      position: 2,
      isDone: false,
    },
    {
      position: 3,
      isDone: false,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);
  const [statusResponse, setStatusResponse] = useState<IResponse>({
    status: 0,
  });

  const validateLogin = () => {
    if (activeStep.position !== 2) return true;

    const { password, confirmPassword, clue } = credentials;
    const errors: any = {};

    if (!password) errors.password = t("wizard.noPassword");
    else if (!validatePassword(password))
      errors.password = t("wizard.invalidPassword");

    if (!confirmPassword) errors.confirmPassword = t("wizard.confirmPassword");
    else if (password !== confirmPassword)
      errors.confirmPassword = t("wizard.differencePassword");

    if (!validateClue(clue)) errors.clue = t("wizard.clueLong");

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const backButton = () => {
    const index = steps.findIndex((x) => x.position === activeStep.position);
    if (index === 0) return;

    setActiveStep(steps[index - 1]);
  };

  const nextButton = async () => {
    if (!validateLogin()) return;

    const index = steps.findIndex(
      (x: any) => x.position === activeStep.position
    );

    setActiveStep(steps[index + 1]);

    if (activeStep.position === 2) {
      setLoading(true);
      try {
        const response = await submitForm(credentials.password);
        setStatusResponse(response);
        setLoading(false);
      } catch (error: any) {
        setStatusResponse(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="wizard">
      <Header
        activeStep={activeStep.position}
        setSteps={setSteps}
        steps={steps}
      />
      <div className="wizard__body">
        {activeStep.position !== 3 && <h2> {t("wizard.title")}</h2>}
        {activeStep.position === 1 && <Step1 />}
        {activeStep.position === 2 && (
          <Step2
            credentials={credentials}
            errorState={errorState}
            handleChange={handleChange}
          />
        )}
        {activeStep.position === 3 && (
          <Step3 loading={loading} response={statusResponse} />
        )}
      </div>
      <Footer
        activeStep={activeStep.position}
        setActiveStep={setActiveStep}
        steps={steps}
        nextButton={nextButton}
        backButton={backButton}
      />
    </div>
  );
};

export default Wizard;
