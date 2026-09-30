import { cva } from "class-variance-authority";

export const badgeVariants = cva("kass-badge", {
  variants: {
    variant: {
      default: "kass-badge--default",
      primary: "kass-badge--primary",
      secondary: "kass-badge--secondary",
      outline: "kass-badge--outline",
      destructive: "kass-badge--destructive",
      success: "kass-badge--success",
      warning: "kass-badge--warning",
    },
    size: {
      sm: "kass-badge--sm",
      md: "kass-badge--md",
      lg: "kass-badge--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
