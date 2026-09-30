import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders with base class", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("kass-skeleton");
  });

  it("is hidden from screen readers", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it.each(["rectangle", "circle", "text"] as const)(
    "applies variant: %s",
    (variant) => {
      const { container } = render(<Skeleton variant={variant} />);
      expect((container.firstChild as HTMLElement).className).toContain(`kass-skeleton--${variant}`);
    }
  );

  it("applies numeric width and height as px", () => {
    const { container } = render(<Skeleton width={200} height={20} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("200px");
    expect(el.style.height).toBe("20px");
  });

  it("applies string width and height", () => {
    const { container } = render(<Skeleton width="100%" height="2rem" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("100%");
    expect(el.style.height).toBe("2rem");
  });

  it("merges custom className", () => {
    const { container } = render(<Skeleton className="custom" />);
    expect((container.firstChild as HTMLElement).className).toContain("custom");
  });
});
