import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("renders with role=status", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has default label 'Loading'", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
  });

  it("supports custom label", () => {
    render(<Spinner label="Processing..." />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Processing...");
  });

  it.each(["xs", "sm", "md", "lg", "xl"] as const)(
    "renders correct size: %s",
    (size) => {
      render(<Spinner size={size} />);
      const svg = screen.getByRole("status");
      expect(svg.getAttribute("width")).toBeTruthy();
      expect(svg.getAttribute("height")).toBeTruthy();
    }
  );

  it("applies kass-spinner class", () => {
    render(<Spinner />);
    expect(screen.getByRole("status").classList.contains("kass-spinner")).toBe(true);
  });

  it("merges custom className", () => {
    render(<Spinner className="my-spinner" />);
    const spinner = screen.getByRole("status");
    expect(spinner.classList.contains("kass-spinner")).toBe(true);
    expect(spinner.classList.contains("my-spinner")).toBe(true);
  });
});
