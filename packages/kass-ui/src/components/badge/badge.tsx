import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { badgeVariants } from "./badge.variants";
import type { BadgeProps } from "./badge.types";

/**
 * A small status indicator or label.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="destructive" size="sm">Error</Badge>
 * ```
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
