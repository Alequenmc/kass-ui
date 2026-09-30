"use client";

import { forwardRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/cn";

/* ─── Tabs Root ──────────────────────────────────────────── */

const TabsRoot = TabsPrimitive.Root;

/* ─── Tabs List ──────────────────────────────────────────── */

const TabsList = forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("kass-tabs-list", className)}
    {...props}
  />
));
TabsList.displayName = "Tabs.List";

/* ─── Tabs Trigger ───────────────────────────────────────── */

const TabsTrigger = forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn("kass-tabs-trigger", className)}
    {...props}
  />
));
TabsTrigger.displayName = "Tabs.Trigger";

/* ─── Tabs Content ───────────────────────────────────────── */

const TabsContent = forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("kass-tabs-content", className)}
    {...props}
  />
));
TabsContent.displayName = "Tabs.Content";

/* ─── Compound Component ─────────────────────────────────── */

/**
 * Tabs with keyboard navigation and accessible roles.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <Tabs.List>
 *     <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
 *     <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">Content 1</Tabs.Content>
 *   <Tabs.Content value="tab2">Content 2</Tabs.Content>
 * </Tabs>
 * ```
 */
const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { Tabs };
