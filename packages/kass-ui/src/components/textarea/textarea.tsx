import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * If true, applies error styling.
   */
  error?: boolean;

  /**
   * Controls the visual size of the textarea.
   * @default "md"
   */
  textareaSize?: "sm" | "md" | "lg";
}

/**
 * A multi-line text input.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Write your message..." />
 * <Textarea error aria-describedby="error-text" />
 * ```
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, textareaSize = "md", disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "kass-textarea",
          `kass-textarea--${textareaSize}`,
          error && "kass-textarea--error",
          className
        )}
        disabled={disabled}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
