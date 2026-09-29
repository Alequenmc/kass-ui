import { useState, useCallback, useRef } from "react";

type UseControllableStateParams<T> = {
  /** The controlled value (when using the component in controlled mode). */
  value?: T;
  /** The default value (when using the component in uncontrolled mode). */
  defaultValue: T;
  /** Callback fired when the value changes. */
  onChange?: (value: T) => void;
};

/**
 * Hook to manage a state that can be either controlled or uncontrolled.
 * This is the foundation for input-like components that support both modes.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useControllableState({
 *   value: props.open,
 *   defaultValue: false,
 *   onChange: props.onOpenChange,
 * });
 * ```
 */
export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateParams<T>): [T, (value: T) => void] {
  const [internalValue, setInternalValue] = useState<T>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const setValue = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onChangeRef.current?.(nextValue);
    },
    [isControlled]
  );

  return [value, setValue];
}
