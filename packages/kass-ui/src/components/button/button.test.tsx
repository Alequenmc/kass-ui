import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  // ── Rendering ──────────────────────────────────────────────

  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("renders children correctly", () => {
    render(
      <Button>
        <span data-testid="child">Hello</span>
      </Button>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  // ── Variants ───────────────────────────────────────────────

  it.each([
    "default",
    "primary",
    "secondary",
    "outline",
    "ghost",
    "destructive",
    "link",
  ] as const)("applies variant class: %s", (variant) => {
    render(<Button variant={variant}>Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain(`kass-btn--${variant}`);
  });

  // ── Sizes ──────────────────────────────────────────────────

  it.each(["xs", "sm", "md", "lg", "icon"] as const)(
    "applies size class: %s",
    (size) => {
      render(<Button size={size}>Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(`kass-btn--${size}`);
    }
  );

  // ── Interaction ────────────────────────────────────────────

  it("handles onClick", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // ── Loading state ──────────────────────────────────────────

  it("shows spinner and disables when loading", () => {
    render(<Button loading>Save</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("aria-disabled", "true");
    // spinner SVG should be present
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("does not fire onClick when loading", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} loading>
        Save
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // ── Icons ──────────────────────────────────────────────────

  it("renders left icon", () => {
    render(
      <Button leftIcon={<span data-testid="left-icon">←</span>}>
        Back
      </Button>
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders right icon", () => {
    render(
      <Button rightIcon={<span data-testid="right-icon">→</span>}>
        Next
      </Button>
    );
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("hides icons when loading", () => {
    render(
      <Button
        loading
        leftIcon={<span data-testid="left-icon">←</span>}
        rightIcon={<span data-testid="right-icon">→</span>}
      >
        Loading
      </Button>
    );
    expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────

  it("supports aria-label", () => {
    render(<Button aria-label="Close dialog" />);
    expect(
      screen.getByRole("button", { name: "Close dialog" })
    ).toBeInTheDocument();
  });

  it("forwards native button attributes", () => {
    render(
      <Button type="submit" name="submit-btn" data-testid="btn">
        Submit
      </Button>
    );
    const button = screen.getByTestId("btn");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("name", "submit-btn");
  });

  // ── Custom className ──────────────────────────────────────

  it("merges custom className", () => {
    render(<Button className="my-custom-class">Styled</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("my-custom-class");
    // should also have base class
    expect(button.className).toContain("kass-btn");
  });

  // ── Ref forwarding ────────────────────────────────────────

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });
});
