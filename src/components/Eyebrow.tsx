import { type ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`from-primary-200 to-primary-300 bg-linear-to-br bg-clip-text text-base font-medium tracking-widest text-transparent uppercase ${className}`}
    >
      {children}
    </p>
  );
}
