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
  const activeDeg = ((currentStepIndex + 1) / steps.length) * 360;

  return (
    <>
      <div
        className="
          flex items-start justify-between p-[2rem]
          xl:hidden
        "
      >
        <div>
          <h3 className="body-3 text-[#242424]">
            {steps[currentStepIndex].info}
          </h3>
          {currentStepIndex !== steps.length - 1 && (
            <p className="body-light text-[#AFAFAF]">
              مرحله بعد: {steps[currentStepIndex + 1].info}
            </p>
          )}
        </div>

        <div
          className="outer-circle"
          style={{
            background: `conic-gradient(
            #A72F3B 0deg ${activeDeg}deg,
            #D9D9D9 ${activeDeg}deg 360deg
          )`,
          }}
        >
          <div className="inner-circle">
            <span className="body-light text-[#242424]">
              {currentStepIndex + 1} از {steps.length}
            </span>
          </div>
        </div>
      </div>

      <div className="step-indicator hidden xl:flex">
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
    </>
  );
}

export default Stepper;
