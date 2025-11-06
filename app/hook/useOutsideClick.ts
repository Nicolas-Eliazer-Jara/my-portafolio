import { useEffect, RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement | null>(

  ref: RefObject<T>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = ref?.current;
      if (!el) return; // evita null
      if (!el.contains(e.target as Node)) callback();
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};
