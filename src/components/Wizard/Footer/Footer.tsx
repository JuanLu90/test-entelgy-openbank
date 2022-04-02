// DEPENDENCES
import { useTranslation } from "react-i18next";

// UTILS
import { IStep } from "../../../utils/typescriptUtil";

// STYLES
import "./Footer.less";

interface IProps {
  activeStep: number;
  setActiveStep: React.SetStateAction<any>;
  steps: IStep[];
  backButton: () => void;
  nextButton: () => void;
}

// FUNCTION
const Footer: React.FC<IProps> = (props) => {
  const { activeStep, setActiveStep, steps, backButton, nextButton } = props;

  const { t } = useTranslation();

  return (
    <footer className="wizard__footer">
      {activeStep === 3 ? (
        <div className="thirdStepButton">
          <button
            onClick={() => setActiveStep(steps[0])}
            className="accessButton"
          >
            {t("wizard.accessBtn")}
          </button>
        </div>
      ) : (
        <div className="buttonsWrapper">
          <button
            onClick={backButton}
            className="cancelButton"
            disabled={steps[0].position === activeStep}
          >
            {t("wizard.cancelBtn")}
          </button>
          <button onClick={nextButton} className="nextButton">
            {steps[steps.length - 1].position !== activeStep
              ? t("wizard.nextBtn")
              : t("wizard.submitBtn")}
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
