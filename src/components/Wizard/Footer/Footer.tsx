// DEPENDENCES
import { useTranslation } from "react-i18next";

// STYLES
import "./Footer.less";

// INTERFACES
interface IStep {
  position: number;
  isDone: boolean;
}

interface IProps {
  activeStep: number;
  setActiveStep: any;
  steps: IStep[];
  backButton: any;
  nextButton: any;
}

// FUNCTION
const Footer: React.FC<IProps> = (props) => {
  const { activeStep, setActiveStep, steps, backButton, nextButton } = props;

  const { t } = useTranslation();

  return (
    <div>
      {activeStep === 3 ? (
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
    </div>
  );
};

export default Footer;
