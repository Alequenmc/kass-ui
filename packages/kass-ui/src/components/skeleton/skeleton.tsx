import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Shape of the skeleton.
   * @default "rectangle"
   */
  variant?: "rectangle" | "circle" | "text";

  /**
   * Width of the skeleton (CSS value).
   */
  width?: string | number;

  /**
   * Height of the skeleton (CSS value).
   */
  height?: string | number;
}

/**
 * A loading placeholder that mimics content layout.
 *
 * @example
 * ```tsx
 * <Skeleton width="100%" height={20} />
 * <Skeleton variant="circle" width={40} height={40} />
 * <Skeleton variant="text" width="60%" />
 * ```
 */
const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "rectangle", width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "kass-skeleton",
          `kass-skeleton--${variant}`,
          className
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
