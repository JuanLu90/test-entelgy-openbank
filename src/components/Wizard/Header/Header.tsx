// DEPEDENCES
import { useEffect } from "react";

// UTILS
import { IStep, IWizardHeader } from "../../../utils/typescriptUtil";

// IMAGES
import tickIcon from "../../../assets/img/tick.png";

// STYLES
import "./Header.less";

// FUNCTION
const Header: React.FC<IWizardHeader> = (props) => {
  const { activeStep, steps, setSteps } = props;

  useEffect(
    () =>
      setSteps((prevStep: IStep[]) =>
        prevStep.map((x) => {
          if (x.position < activeStep) x.isDone = true;
          else x.isDone = false;
          return x;
        })
      ),

    [activeStep, setSteps]
  );

  return (
    <div className="wizard__header">
      {steps.map((step, i) => {
        return (
          <div
            key={i}
            className={`stepNumber ${
              activeStep === step.position ? "active" : ""
            } ${step.isDone ? "done" : ""}`}
          >
            <span>
              {step.isDone ? <img src={tickIcon} alt="Tick" /> : step.position}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
