import { type ReactNode } from "react";
import { type RoundedSize, roundedClasses } from "./shared-styles";

type PaddingSize = "xs" | "sm" | "lg";

interface WrapperProps {
  children: ReactNode;
  padding?: PaddingSize;
  rounded?: RoundedSize;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

/*
 * Padding scale (mobile → md+):
 *   xs:  8px all              →  8px all
 *   sm:  16px x / 24px y      →  24px all
 *   lg:  24px x / 40px y      →  40px all
 */
const paddingClasses: Record<PaddingSize, string> = {
  xs: "p-2",
  sm: "px-4 py-6 md:p-6",
  lg: "px-6 py-10 md:p-10",
};

export function Wrapper({
  children,
  padding = "lg",
  rounded = "none",
  as: Tag = "div",
  className = "",
}: WrapperProps) {
  return (
    <Tag
      className={`shadow-theme ${paddingClasses[padding]} ${roundedClasses[rounded]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
