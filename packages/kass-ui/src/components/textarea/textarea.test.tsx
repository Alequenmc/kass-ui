import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders a textarea element", () => {
    render(<Textarea data-testid="ta" placeholder="Write..." />);
    const ta = screen.getByTestId("ta");
    expect(ta.tagName).toBe("TEXTAREA");
    expect(ta).toHaveAttribute("placeholder", "Write...");
  });

  it.each(["sm", "md", "lg"] as const)("applies size class: %s", (size) => {
    render(<Textarea textareaSize={size} data-testid="ta" />);
    expect(screen.getByTestId("ta").className).toContain(`kass-textarea--${size}`);
  });

  it("applies error state", () => {
    render(<Textarea error data-testid="ta" />);
    const ta = screen.getByTestId("ta");
    expect(ta.className).toContain("kass-textarea--error");
    expect(ta).toHaveAttribute("aria-invalid", "true");
  });

  it("handles disabled", () => {
    render(<Textarea disabled data-testid="ta" />);
    expect(screen.getByTestId("ta")).toBeDisabled();
  });

  it("fires onChange", () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} data-testid="ta" />);
    fireEvent.change(screen.getByTestId("ta"), { target: { value: "text" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
  });
});
