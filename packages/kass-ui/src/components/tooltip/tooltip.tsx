"use client";

import { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../lib/cn";

/* ─── Tooltip Provider ───────────────────────────────────── */

const TooltipProvider = TooltipPrimitive.Provider;

/* ─── Tooltip Root ───────────────────────────────────────── */

const TooltipRoot = TooltipPrimitive.Root;

/* ─── Tooltip Trigger ────────────────────────────────────── */

const TooltipTrigger = TooltipPrimitive.Trigger;

/* ─── Tooltip Content ────────────────────────────────────── */

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

const TooltipContent = forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("kass-tooltip-content", className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "Tooltip.Content";

/* ─── Compound Component ─────────────────────────────────── */

/**
 * A tooltip that appears on hover/focus.
 * Wrap your app with `<Tooltip.Provider>` for shared delay settings.
 *
 * @example
 * ```tsx
 * <Tooltip.Provider>
 *   <Tooltip>
 *     <Tooltip.Trigger>Hover me</Tooltip.Trigger>
 *     <Tooltip.Content>Tooltip text</Tooltip.Content>
 *   </Tooltip>
 * </Tooltip.Provider>
 * ```
 */
const Tooltip = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export { Tooltip };
