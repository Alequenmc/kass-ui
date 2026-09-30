import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./input.variants";

export type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {
  /**
   * If true, applies error styling to the input.
   */
  error?: boolean;

  /**
   * Content to display before the input (e.g., icon or prefix text).
   */
  leftAddon?: React.ReactNode;

  /**
   * Content to display after the input (e.g., icon or suffix text).
   */
  rightAddon?: React.ReactNode;
}
