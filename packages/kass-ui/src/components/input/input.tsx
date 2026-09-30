import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { inputVariants } from "./input.variants";
import type { InputProps } from "./input.types";

/**
 * A text input component with variants, sizes, and addon support.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input variant="filled" inputSize="lg" />
 * <Input error aria-describedby="error-msg" />
 * <Input leftAddon={<SearchIcon />} placeholder="Search..." />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      error = false,
      disabled,
      leftAddon,
      rightAddon,
      type = "text",
      ...props
    },
    ref
  ) => {
    if (leftAddon || rightAddon) {
      return (
        <div
          className={cn(
            "kass-input-wrapper",
            error && "kass-input-wrapper--error",
            disabled && "kass-input-wrapper--disabled",
            inputSize === "sm" && "kass-input-wrapper--sm",
            inputSize === "lg" && "kass-input-wrapper--lg"
          )}
        >
          {leftAddon && (
            <span className="kass-input-addon kass-input-addon--left" aria-hidden="true">
              {leftAddon}
            </span>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              "kass-input kass-input--in-wrapper",
              error && "kass-input--error",
              className
            )}
            disabled={disabled}
            aria-invalid={error || undefined}
            {...props}
          />
          {rightAddon && (
            <span className="kass-input-addon kass-input-addon--right" aria-hidden="true">
              {rightAddon}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          inputVariants({ variant, inputSize }),
          error && "kass-input--error",
          className
        )}
        disabled={disabled}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
