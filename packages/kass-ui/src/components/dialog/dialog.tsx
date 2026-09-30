"use client";

import { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/cn";

/* ─── Dialog Root ────────────────────────────────────────── */

const DialogRoot = DialogPrimitive.Root;

/* ─── Dialog Trigger ─────────────────────────────────────── */

const DialogTrigger = DialogPrimitive.Trigger;

/* ─── Dialog Portal ──────────────────────────────────────── */

const DialogPortal = DialogPrimitive.Portal;

/* ─── Dialog Close ───────────────────────────────────────── */

const DialogClose = DialogPrimitive.Close;

/* ─── Dialog Overlay ─────────────────────────────────────── */

const DialogOverlay = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("kass-dialog-overlay", className)}
    {...props}
  />
));
DialogOverlay.displayName = "Dialog.Overlay";

/* ─── Dialog Content ─────────────────────────────────────── */

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /**
   * Whether to show the close button in the top-right corner.
   * @default true
   */
  showClose?: boolean;

  /**
   * Size of the dialog content.
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const DialogContent = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showClose = true, size = "md", ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "kass-dialog-content",
        `kass-dialog-content--${size}`,
        className
      )}
      {...props}
    >
      {children}
      {showClose && (
        <DialogPrimitive.Close className="kass-dialog-close" aria-label="Close">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "Dialog.Content";

/* ─── Dialog Header ──────────────────────────────────────── */

const DialogHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("kass-dialog-header", className)} {...props} />
));
DialogHeader.displayName = "Dialog.Header";

/* ─── Dialog Footer ──────────────────────────────────────── */

const DialogFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("kass-dialog-footer", className)} {...props} />
));
DialogFooter.displayName = "Dialog.Footer";

/* ─── Dialog Title ───────────────────────────────────────── */

const DialogTitle = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("kass-dialog-title", className)}
    {...props}
  />
));
DialogTitle.displayName = "Dialog.Title";

/* ─── Dialog Description ─────────────────────────────────── */

const DialogDescription = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("kass-dialog-description", className)}
    {...props}
  />
));
DialogDescription.displayName = "Dialog.Description";

/* ─── Compound Component ─────────────────────────────────── */

/**
 * A modal dialog with overlay, focus trapping, and keyboard navigation.
 * Built on Radix UI Dialog for full accessibility.
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <Dialog.Trigger>Open</Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Confirm action</Dialog.Title>
 *       <Dialog.Description>Are you sure?</Dialog.Description>
 *     </Dialog.Header>
 *     <Dialog.Footer>
 *       <Dialog.Close>Cancel</Dialog.Close>
 *       <Button variant="primary">Confirm</Button>
 *     </Dialog.Footer>
 *   </Dialog.Content>
 * </Dialog>
 * ```
 */
const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});

export { Dialog };
export type { DialogContentProps };
