import { forwardRef } from "react";
import { cn } from "../../lib/cn";

/* ─── Card Root ──────────────────────────────────────────── */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card.
   * @default "default"
   */
  variant?: "default" | "outline" | "ghost" | "elevated";
}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "kass-card",
          `kass-card--${variant}`,
          className
        )}
        {...props}
      />
    );
  }
);
CardRoot.displayName = "Card";

/* ─── Card Header ────────────────────────────────────────── */

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("kass-card__header", className)} {...props} />
  )
);
CardHeader.displayName = "Card.Header";

/* ─── Card Title ─────────────────────────────────────────── */

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("kass-card__title", className)} {...props} />
  )
);
CardTitle.displayName = "Card.Title";

/* ─── Card Description ───────────────────────────────────── */

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("kass-card__description", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "Card.Description";

/* ─── Card Content ───────────────────────────────────────── */

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("kass-card__content", className)} {...props} />
  )
);
CardContent.displayName = "Card.Content";

/* ─── Card Footer ────────────────────────────────────────── */

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("kass-card__footer", className)} {...props} />
  )
);
CardFooter.displayName = "Card.Footer";

/* ─── Compound Component ─────────────────────────────────── */

/**
 * A composable card component with header, title, description, content, and footer.
 *
 * @example
 * ```tsx
 * <Card>
 *   <Card.Header>
 *     <Card.Title>Project</Card.Title>
 *     <Card.Description>A brief overview</Card.Description>
 *   </Card.Header>
 *   <Card.Content>
 *     <p>Main content here</p>
 *   </Card.Content>
 *   <Card.Footer>
 *     <Button>Continue</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */
const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export { Card };
