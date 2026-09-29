import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { buttonVariants } from "./button.variants";
import type { ButtonProps } from "./button.types";

/**
 * A versatile button component with multiple variants, sizes, and states.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 *
 * <Button variant="outline" loading>
 *   Saving...
 * </Button>
 *
 * <Button variant="ghost" leftIcon={<SearchIcon />}>
 *   Search
 * </Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="kass-animate-spin"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.25"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )}

        {!loading && leftIcon && (
          <span className="kass-btn__icon" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {children}

        {!loading && rightIcon && (
          <span className="kass-btn__icon" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
