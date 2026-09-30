import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });

  it("defaults to type=text", () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId("input")).toHaveAttribute("type", "text");
  });

  it("supports type prop", () => {
    render(<Input type="email" data-testid="input" />);
    expect(screen.getByTestId("input")).toHaveAttribute("type", "email");
  });

  it.each(["default", "filled", "ghost"] as const)(
    "applies variant class: %s",
    (variant) => {
      render(<Input variant={variant} data-testid="input" />);
      expect(screen.getByTestId("input").className).toContain(`kass-input--${variant}`);
    }
  );

  it.each(["sm", "md", "lg"] as const)(
    "applies size class: %s",
    (inputSize) => {
      render(<Input inputSize={inputSize} data-testid="input" />);
      expect(screen.getByTestId("input").className).toContain(`kass-input--${inputSize}`);
    }
  );

  it("applies error state", () => {
    render(<Input error data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input.className).toContain("kass-input--error");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("handles disabled state", () => {
    render(<Input disabled data-testid="input" />);
    expect(screen.getByTestId("input")).toBeDisabled();
  });

  it("fires onChange", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} data-testid="input" />);
    fireEvent.change(screen.getByTestId("input"), { target: { value: "hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders with left addon", () => {
    render(<Input leftAddon={<span data-testid="left">@</span>} data-testid="input" />);
    expect(screen.getByTestId("left")).toBeInTheDocument();
  });

  it("renders with right addon", () => {
    render(<Input rightAddon={<span data-testid="right">.com</span>} data-testid="input" />);
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("renders wrapper with error state when addons present", () => {
    const { container } = render(
      <Input error leftAddon={<span>@</span>} data-testid="input" />
    );
    expect(container.querySelector(".kass-input-wrapper--error")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(<Input className="my-input" data-testid="input" />);
    expect(screen.getByTestId("input").className).toContain("my-input");
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });
});
