import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../hooks/use-controllable-state";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Default checked state for uncontrolled mode.
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * Callback when checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Size of the checkbox.
   * @default "md"
   */
  checkboxSize?: "sm" | "md" | "lg";

  /**
   * Label text to display next to the checkbox.
   */
  label?: string;

  /**
   * If true, applies error styling.
   */
  error?: boolean;
}

/**
 * A checkbox input with label support and controlled/uncontrolled modes.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
 * ```
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      checkboxSize = "md",
      label,
      error = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState({
      value: controlledChecked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    });

    const checkboxId = id || (label ? `kass-checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <label
        className={cn(
          "kass-checkbox-wrapper",
          disabled && "kass-checkbox-wrapper--disabled",
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cn(
            "kass-checkbox",
            `kass-checkbox--${checkboxSize}`,
            error && "kass-checkbox--error"
          )}
          checked={isChecked}
          disabled={disabled}
          aria-invalid={error || undefined}
          onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
        <svg
          className={cn(
            "kass-checkbox__indicator",
            `kass-checkbox__indicator--${checkboxSize}`,
            isChecked && "kass-checkbox__indicator--checked",
            error && "kass-checkbox__indicator--error",
            disabled && "kass-checkbox__indicator--disabled"
          )}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          {isChecked && (
            <path
              d="M3.5 8L6.5 11L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
        {label && <span className="kass-checkbox__label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
