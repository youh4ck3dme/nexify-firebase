
import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), textarea, input, select';

export const useTrapFocus = <T extends HTMLElement>(isOpen: boolean) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const element = ref.current;
    const focusableEls = Array.from(element.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
    
    if (focusableEls.length === 0) return;

    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    // Set initial focus
    firstFocusableEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusableEls.length < 2) return;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return ref;
};