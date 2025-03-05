import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders the button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies the correct variant styles", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-blue-600 text-white");
  });
});
