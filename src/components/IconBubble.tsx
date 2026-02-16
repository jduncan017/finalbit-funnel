import { type ReactNode } from "react";

type IconBubbleSize = "sm" | "md";

interface IconBubbleProps {
  children: ReactNode;
  size?: IconBubbleSize;
}

const sizeClasses: Record<IconBubbleSize, string> = {
  sm: "h-10 w-10 [&>svg]:h-5 [&>svg]:w-5",
  md: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
};

export function IconBubble({ children, size = "md" }: IconBubbleProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary-300 text-white ring-[3px] ring-primary-400/30 ${sizeClasses[size]}`}
    >
      {children}
    </div>
  );
}
