import { cva } from "class-variance-authority";

export const inputVariants = cva("kass-input", {
  variants: {
    variant: {
      default: "kass-input--default",
      filled: "kass-input--filled",
      ghost: "kass-input--ghost",
    },
    inputSize: {
      sm: "kass-input--sm",
      md: "kass-input--md",
      lg: "kass-input--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "md",
  },
});
