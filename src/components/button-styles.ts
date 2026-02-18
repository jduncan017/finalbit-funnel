export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonBase =
  "inline-flex items-center justify-center font-semibold transition cursor-pointer";

export const buttonFocus =
  "focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2";

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br border border-primary-200/20 from-primary-300 to-primary-400 text-white hover:from-primary-200 hover:to-primary-300 hover:text-black",
  secondary: "bg-secondary-300 text-white hover:bg-secondary-400",
  outline:
    "border-2 border-primary-300 text-primary-300 bg-transparent hover:bg-primary-100",
  ghost: "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-white",
};

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "py-2 px-4 text-base",
  md: "py-3 px-6 text-lg",
  lg: "py-4 px-8 text-xl",
};

/* When arrow is enabled, normal padding on mobile (arrow hidden), reduced right on desktop */
export const arrowSizeClasses: Record<ButtonSize, string> = {
  sm: "py-2 px-4 md:py-1.5 md:pl-4 md:pr-1.5 text-base",
  md: "py-3 px-6 md:py-2 md:pl-6 md:pr-2 text-lg",
  lg: "py-4 px-8 md:py-2 md:pl-8 md:pr-2 text-xl",
};

export const arrowCircleClasses: Record<ButtonSize, string> = {
  sm: "ml-3 h-8 w-8",
  md: "ml-4 h-10 w-10",
  lg: "ml-4 h-12 w-12",
};

export const spinnerClasses = "animate-spin -ml-1 mr-2 h-4 w-4";
