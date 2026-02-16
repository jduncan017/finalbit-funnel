export type RoundedSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

/*
 * Border-radius scale:
 *   xs: 2px  |  sm: 4px  |  md: 8px  |  lg: 16px  |  xl: 24px
 */
export const roundedClasses: Record<RoundedSize, string> = {
  none: "",
  xs: "rounded-[2px]",
  sm: "rounded-[4px]",
  md: "rounded-[8px]",
  lg: "rounded-[16px]",
  xl: "rounded-[100px]",
};
