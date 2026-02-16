"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface CalModalProps {
  open: boolean;
  onClose: () => void;
}

export function CalModal({ open, onClose }: CalModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-2xl rounded-2xl border border-gray-400/30 bg-neutral-400 p-6 shadow-theme"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-300 transition hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-400/30 p-8">
          <p className="text-lg font-semibold text-white">
            Cal.com booking embed goes here
          </p>
          <p className="mt-2 max-w-sm text-center text-sm text-neutral-300">
            Replace this placeholder with the{" "}
            <code className="rounded bg-gray-400/30 px-1.5 py-0.5 text-xs">
              @calcom/embed-react
            </code>{" "}
            component pointing to your Cal.com scheduling link.
          </p>
        </div>
      </div>
    </div>
  );
}
