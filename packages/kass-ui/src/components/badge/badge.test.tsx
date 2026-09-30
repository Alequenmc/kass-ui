import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders with text content", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText("Status").tagName).toBe("SPAN");
  });

  it.each([
    "default",
    "primary",
    "secondary",
    "outline",
    "destructive",
    "success",
    "warning",
  ] as const)("applies variant class: %s", (variant) => {
    render(<Badge variant={variant}>Badge</Badge>);
    expect(screen.getByText("Badge").className).toContain(`kass-badge--${variant}`);
  });

  it.each(["sm", "md", "lg"] as const)("applies size class: %s", (size) => {
    render(<Badge size={size}>Badge</Badge>);
    expect(screen.getByText("Badge").className).toContain(`kass-badge--${size}`);
  });

  it("merges custom className", () => {
    render(<Badge className="custom">Badge</Badge>);
    const badge = screen.getByText("Badge");
    expect(badge.className).toContain("kass-badge");
    expect(badge.className).toContain("custom");
  });
});
