import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders as a horizontal separator by default", () => {
    render(<Separator />);
    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
    expect(separator.className).toContain("kass-separator--horizontal");
  });

  it("renders as a vertical separator", () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole("separator");
    expect(separator).toHaveAttribute("aria-orientation", "vertical");
    expect(separator.className).toContain("kass-separator--vertical");
  });

  it("renders decorative separator with role=none", () => {
    render(<Separator decorative data-testid="sep" />);
    expect(screen.queryByRole("separator")).not.toBeInTheDocument();
    expect(screen.getByTestId("sep")).toHaveAttribute("role", "none");
  });

  it("merges custom className", () => {
    render(<Separator className="my-sep" />);
    const separator = screen.getByRole("separator");
    expect(separator.className).toContain("kass-separator");
    expect(separator.className).toContain("my-sep");
  });
});
