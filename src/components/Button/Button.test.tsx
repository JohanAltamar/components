import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  test("Render component correctly, and apply light variation by default", () => {
    const content = "Default";
    const { container } = render(<Button>{content}</Button>);
    screen.getByText(content);
    expect(container.firstChild).toHaveClass("btn-light");
  });
  
  test("Button set variation correctly", () => {
    const variation = "secondary";
    const { container } = render(
      <Button variation={variation}>Button Text</Button>
    );
    expect(container.firstChild).toHaveClass(`btn-${variation.toLowerCase()}`);
  });
  
  test("Render correctly when variation and className are set", () => {
    const variation = "secondary";
    const className = "test";
    const { container } = render(
      <Button className={className} variation={variation}>Button Text</Button>
    );
    expect(container.firstChild).toHaveClass(`btn-${variation.toLowerCase()}`);
    expect(container.firstChild).toHaveClass(`${className}`);
  });
});
