import { cva } from "class-variance-authority";

/**
 * Button variant definitions using CVA.
 *
 * Uses Kass UI CSS classes (kass-btn--*) that reference design tokens,
 * combined with Tailwind utility classes for layout.
 */
export const buttonVariants = cva(
  /* Base styles */
  "kass-btn",
  {
    variants: {
      variant: {
        default: "kass-btn--default",
        primary: "kass-btn--primary",
        secondary: "kass-btn--secondary",
        outline: "kass-btn--outline",
        ghost: "kass-btn--ghost",
        destructive: "kass-btn--destructive",
        link: "kass-btn--link",
      },
      size: {
        xs: "kass-btn--xs",
        sm: "kass-btn--sm",
        md: "kass-btn--md",
        lg: "kass-btn--lg",
        icon: "kass-btn--icon",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
