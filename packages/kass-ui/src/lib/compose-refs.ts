import type { Ref, MutableRefObject, RefCallback } from "react";

type PossibleRef<T> = Ref<T> | undefined;

/**
 * Compose multiple refs into a single ref callback.
 * Useful when a component needs to forward a ref while also using one internally.
 *
 * @example
 * const Component = forwardRef<HTMLDivElement>((props, forwardedRef) => {
 *   const internalRef = useRef<HTMLDivElement>(null);
 *   return <div ref={composeRefs(forwardedRef, internalRef)} />;
 * });
 */
export function composeRefs<T>(...refs: PossibleRef<T>[]): RefCallback<T> {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    }
  };
}
