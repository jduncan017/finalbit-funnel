import { type ReactNode } from "react";

type PaddingSize = "xs" | "sm" | "lg";
type RoundedSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

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

/*
 * Border-radius scale:
 *   xs: 2px  |  sm: 4px  |  md: 8px  |  lg: 16px  |  xl: 24px
 */
const roundedClasses: Record<RoundedSize, string> = {
  none: "",
  xs: "rounded-[2px]",
  sm: "rounded-[4px]",
  md: "rounded-[8px]",
  lg: "rounded-[16px]",
  xl: "rounded-[24px]",
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
      className={`${paddingClasses[padding]} ${roundedClasses[rounded]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
