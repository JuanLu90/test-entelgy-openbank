// IMAGES
import tickIcon from "../../../assets/img/tick.png";

// STYLES
import { useEffect } from "react";
import "./Header.less";

// INTERFACES
interface IStep {
  position: number;
  isDone: boolean;
}

interface IProps {
  activeStep: number;
  steps: IStep[];
  setSteps: any;
}

// FUNCTION
const Header: React.FC<IProps> = (props) => {
  const { activeStep, steps, setSteps } = props;

  useEffect(
    () =>
      setSteps((prevStep: any) =>
        prevStep.map((x: any) => {
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
