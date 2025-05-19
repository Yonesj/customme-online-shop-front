import { type JSX, type ReactNode } from "react";
import { Fragment } from "react";

import "./Stepper.css";

interface Step {
  icon: ReactNode;
  info: string;
}

interface StepperProps {
  steps: Step[];
  currentStepIndex: number;
}

function Stepper({ steps, currentStepIndex }: StepperProps): JSX.Element {
  if (steps.length === 0) return;

  return (
    <div className="step-indicator">
      {steps.map((s, index) => (
        <Fragment key={index}>
          <div className="stepper">
            {s.icon}
            <span
              className="body-5"
              style={{
                color: index <= currentStepIndex ? "#a72f3b" : "#edd5d8",
              }}
            >
              {s.info}
            </span>
          </div>

          {index < steps.length - 1 && <div className="step-line" />}
        </Fragment>
      ))}
    </div>
  );
}

export default Stepper;
