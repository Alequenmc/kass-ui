import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Size of the spinner.
   * @default "md"
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Accessible label for the spinner.
   * @default "Loading"
   */
  label?: string;
}

const sizeMap = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

/**
 * A loading spinner indicator.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" label="Processing..." />
 * ```
 */
const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = "md", label = "Loading", ...props }, ref) => {
    const dimension = sizeMap[size];

    return (
      <svg
        ref={ref}
        className={cn("kass-spinner", className)}
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="status"
        aria-label={label}
        {...props}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.2"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
