import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * When true, adds a visual indicator that the field is required.
   */
  required?: boolean;

  /**
   * When true, applies disabled styling.
   */
  disabled?: boolean;
}

/**
 * A label component for form controls.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email" required>Email address</Label>
 * ```
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, disabled, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("kass-label", disabled && "kass-label--disabled", className)}
        {...props}
      >
        {children}
        {required && (
          <span className="kass-label__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
