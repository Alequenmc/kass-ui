import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind CSS conflict resolution.
 * Combines `clsx` for conditional classes with `tailwind-merge`
 * to resolve conflicting Tailwind utilities (e.g., `p-2` + `p-4` → `p-4`).
 *
 * @example
 * cn("p-2 text-red-500", isActive && "text-blue-500", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
