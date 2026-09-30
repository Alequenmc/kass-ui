"use client";

import { forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../lib/cn";

/* ─── Select Root ────────────────────────────────────────── */

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

/* ─── Select Trigger ─────────────────────────────────────── */

const SelectTrigger = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    selectSize?: "sm" | "md" | "lg";
    error?: boolean;
  }
>(({ className, children, selectSize = "md", error = false, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "kass-select-trigger",
      `kass-select-trigger--${selectSize}`,
      error && "kass-select-trigger--error",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="kass-select-icon">
      <svg
        width="12"
        height="12"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "Select.Trigger";

/* ─── Select Content ─────────────────────────────────────── */

const SelectContent = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn("kass-select-content", className)}
      position={position}
      sideOffset={4}
      {...props}
    >
      <SelectPrimitive.Viewport className="kass-select-viewport">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "Select.Content";

/* ─── Select Item ────────────────────────────────────────── */

const SelectItem = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn("kass-select-item", className)}
    {...props}
  >
    <SelectPrimitive.ItemIndicator className="kass-select-item-indicator">
      <svg
        width="12"
        height="12"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "Select.Item";

/* ─── Select Label ───────────────────────────────────────── */

const SelectLabel = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("kass-select-label", className)}
    {...props}
  />
));
SelectLabel.displayName = "Select.Label";

/* ─── Select Separator ───────────────────────────────────── */

const SelectSeparator = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("kass-select-separator", className)}
    {...props}
  />
));
SelectSeparator.displayName = "Select.Separator";

/* ─── Compound Component ─────────────────────────────────── */

/**
 * A custom select dropdown with full keyboard navigation.
 *
 * @example
 * ```tsx
 * <Select>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Pick a fruit" />
 *   </Select.Trigger>
 *   <Select.Content>
 *     <Select.Item value="apple">Apple</Select.Item>
 *     <Select.Item value="banana">Banana</Select.Item>
 *   </Select.Content>
 * </Select>
 * ```
 */
const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Value: SelectValue,
  Group: SelectGroup,
  Label: SelectLabel,
  Separator: SelectSeparator,
});

export { Select };
