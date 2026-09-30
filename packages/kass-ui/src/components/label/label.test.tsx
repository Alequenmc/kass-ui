import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  it("renders with text content", () => {
    render(<Label>Email</Label>);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders as a label element", () => {
    render(<Label>Name</Label>);
    const label = screen.getByText("Name");
    expect(label.tagName).toBe("LABEL");
  });

  it("supports htmlFor attribute", () => {
    render(<Label htmlFor="email-input">Email</Label>);
    expect(screen.getByText("Email")).toHaveAttribute("for", "email-input");
  });

  it("shows required indicator when required", () => {
    render(<Label required>Email</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
  });

  it("does not show required indicator by default", () => {
    render(<Label>Email</Label>);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("applies disabled styling", () => {
    render(<Label disabled>Email</Label>);
    const label = screen.getByText("Email");
    expect(label.className).toContain("kass-label--disabled");
  });

  it("merges custom className", () => {
    render(<Label className="my-label">Email</Label>);
    const label = screen.getByText("Email");
    expect(label.className).toContain("kass-label");
    expect(label.className).toContain("my-label");
  });
});
