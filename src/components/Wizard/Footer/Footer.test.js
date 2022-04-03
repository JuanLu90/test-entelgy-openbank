import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer Tests", () => {
  it("step 3 active", () => {
    const steps = [
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
    ];

    render(<Footer activeStep={3} steps={steps} />);

    const NextButton = screen.queryByText("wizard.nextBtn");
    const AccessButton = screen.queryByText("wizard.accessBtn");

    expect(NextButton).toBeFalsy();
    expect(AccessButton).toBeTruthy();
  });

  it("step 2 active", () => {
    const steps = [
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
    ];

    render(<Footer activeStep={2} steps={steps} />);

    const ButtonElement = screen.queryByText("wizard.nextBtn");

    expect(ButtonElement).toBeTruthy();
  });
});
