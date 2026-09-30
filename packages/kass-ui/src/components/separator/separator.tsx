import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Orientation of the separator.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Whether the separator is purely decorative.
   * When true, uses role="none" instead of "separator".
   * @default false
   */
  decorative?: boolean;
}

/**
 * A visual divider between content sections.
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" />
 * ```
 */
const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = false,
      ...props
    },
    ref
  ) => {
    const semanticProps = decorative
      ? { role: "none" as const }
      : {
          role: "separator" as const,
          "aria-orientation": orientation,
        };

    return (
      <div
        ref={ref}
        className={cn(
          "kass-separator",
          orientation === "vertical"
            ? "kass-separator--vertical"
            : "kass-separator--horizontal",
          className
        )}
        {...semanticProps}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
