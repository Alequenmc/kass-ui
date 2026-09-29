import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./button.variants";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  /**
   * If true, the button will show a loading spinner and be disabled.
   */
  loading?: boolean;

  /**
   * Content to display before the button label.
   */
  leftIcon?: React.ReactNode;

  /**
   * Content to display after the button label.
   */
  rightIcon?: React.ReactNode;

  /**
   * Render the button as a different element (polymorphism).
   * @default "button"
   */
  asChild?: boolean;
}
