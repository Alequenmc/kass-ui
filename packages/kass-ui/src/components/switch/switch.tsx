import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../hooks/use-controllable-state";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
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
   * Size of the switch.
   * @default "md"
   */
  switchSize?: "sm" | "md" | "lg";

  /**
   * Label text to display next to the switch.
   */
  label?: string;

  /**
   * Whether the switch is disabled.
   */
  disabled?: boolean;
}

/**
 * A toggle switch component.
 *
 * @example
 * ```tsx
 * <Switch label="Dark mode" />
 * <Switch checked={isDark} onCheckedChange={setIsDark} />
 * ```
 */
const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      switchSize = "md",
      label,
      disabled = false,
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

    const switchId = id || (label ? `kass-switch-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    const switchElement = (
      <button
        ref={ref}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        className={cn(
          "kass-switch",
          `kass-switch--${switchSize}`,
          isChecked && "kass-switch--checked",
          disabled && "kass-switch--disabled",
          className
        )}
        onClick={() => setIsChecked(!isChecked)}
        {...props}
      >
        <span
          className={cn(
            "kass-switch__thumb",
            `kass-switch__thumb--${switchSize}`,
            isChecked && "kass-switch__thumb--checked"
          )}
          aria-hidden="true"
        />
      </button>
    );

    if (label) {
      return (
        <label className={cn("kass-switch-wrapper", disabled && "kass-switch-wrapper--disabled")}>
          {switchElement}
          <span className="kass-switch__label">{label}</span>
        </label>
      );
    }

    return switchElement;
  }
);

Switch.displayName = "Switch";

export { Switch };
