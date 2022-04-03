import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Step3 from "./Step3";

describe("Step3 Tests", () => {
  it("spinner appears", () => {
    render(<Step3 loading={true} response={{ status: 0 }} />);

    const Spinner = screen.getByTestId("spinner");

    expect(Spinner).toBeInTheDocument();
  });

  it("response OK", () => {
    render(<Step3 loading={false} response={{ status: 200 }} />);

    const ButtonElement = screen.getByText("step3.OK.title");

    expect(ButtonElement).toBeInTheDocument();
  });

  it("response KO", () => {
    render(<Step3 loading={false} response={{ status: 401 }} />);

    const ButtonElement = screen.getByText("step3.KO.title");

    expect(ButtonElement).toBeInTheDocument();
  });
});
