import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Wizard from "./Wizard";

describe("TestLists", () => {
  it("first render content", () => {
    render(<Wizard />);

    const ButtonElement = screen.getByText("wizard.nextBtn");
    const TitleElement = screen.getByText("step1.howWorks.title");

    expect(ButtonElement).toBeInTheDocument();
    expect(TitleElement).toBeInTheDocument();
  });
});
