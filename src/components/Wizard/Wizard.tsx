// DEPENDENCES
import { useState } from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";

// UTILS
import { validatePassword, validateClue } from "../../utils/validationUtil";

// UTILS
import { submitForm } from "../../services/api";

// STYLES
import "./Wizard.css";

// INTERFACE
interface ICredentials {
  password: string;
  confirmPassword: string;
  clue: string;
}

interface IStep {
  label: number;
  key: string;
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
      label: 1,
      key: "firstStep",
      isDone: false,
    },
    {
      label: 2,
      key: "secondStep",
      isDone: false,
    },
    {
      label: 3,
      key: "thirdStep",
      isDone: false,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);
  const [statusResponse, setStatusResponse] = useState<IResponse>({
    status: 0,
  });

  const validateLogin = () => {
    if (activeStep.key !== "secondStep") return true;

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
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  const nextButton = async () => {
    if (!validateLogin()) return;

    const index = steps.findIndex((x: any) => x.key === activeStep.key);
    setSteps((prevStep: any) =>
      prevStep.map((x: any) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);

    if (activeStep.key === "secondStep") {
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
      <div className="wizard__header">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className={`stepNumber ${
                activeStep.key === step.key ? "active" : ""
              } ${step.isDone ? "done" : ""}`}
            >
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
      <div className="wizard__body">
        {activeStep.key !== "thirdStep" && <h2> {t("wizard.title")}</h2>}
        {activeStep.key === "firstStep" && <Step1 />}
        {activeStep.key === "secondStep" && (
          <Step2
            credentials={credentials}
            errorState={errorState}
            handleChange={handleChange}
          />
        )}
        {activeStep.key === "thirdStep" && (
          <Step3 loading={loading} response={statusResponse} />
        )}
      </div>
      {activeStep.key === "thirdStep" ? (
        <div className="wizard__footer_thirdStep">
          <button
            onClick={() => setActiveStep(steps[0])}
            className="nextButton"
          >
            {t("wizard.accessBtn")}
          </button>
        </div>
      ) : (
        <div className="wizard__footer">
          <button
            onClick={backButton}
            className="cancelButton"
            disabled={steps[0].key === activeStep.key}
          >
            {t("wizard.cancelBtn")}
          </button>
          <button onClick={nextButton} className="nextButton">
            {steps[steps.length - 1].key !== activeStep.key
              ? t("wizard.nextBtn")
              : t("wizard.submitBtn")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Wizard;
