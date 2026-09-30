import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./badge.variants";

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BadgeVariantProps {}
