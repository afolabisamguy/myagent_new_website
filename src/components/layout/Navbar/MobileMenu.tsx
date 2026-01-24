import { type RefObject, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Button } from "../../ui/Button";
import { Brand } from "./Brand";
import { type NavItem } from "../../../data/nav";
import { cn } from "../../../lib/cn";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";
import { Portal } from "../../ui/Portal";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  returnFocusRef: RefObject<HTMLButtonElement>;
  id: string;
}

export function MobileMenu({
  open,
  onClose,
  items,
  returnFocusRef,
  id,
}: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const wasOpenRef = useRef(false);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const isShift = event.shiftKey;

      if (isShift && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!isShift && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      return;
    }

    if (wasOpenRef.current) {
      returnFocusRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [open, returnFocusRef]);

  if (!open) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[200]">
        <div
          className={cn(
            "fixed inset-0 bg-black/40 backdrop-blur-sm",
            prefersReducedMotion
              ? "transition-none"
              : "transition-opacity duration-200 ease-out",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={panelRef}
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "fixed right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-black/10 bg-white shadow-2xl",
            prefersReducedMotion
              ? "transition-none"
              : "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
            <Brand />
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 px-6 py-6">
            {items.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={onClose}
                className="rounded-xl px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-black/5 px-6 py-6">
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="md">
                Download App
              </Button>
              <Button variant="outline" size="md">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
