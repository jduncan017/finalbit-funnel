"use client";

import { useState, type ReactNode } from "react";
import { CalModal } from "./CalModal";

interface CalModalTriggerProps {
  children: (openModal: () => void) => ReactNode;
}

export function CalModalTrigger({ children }: CalModalTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children(() => setOpen(true))}
      <CalModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
