export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonBase =
  "inline-flex items-center justify-center font-semibold transition cursor-pointer";

export const buttonFocus =
  "focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2";

export const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-300 text-white hover:bg-primary-400",
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

export const spinnerClasses = "animate-spin -ml-1 mr-2 h-4 w-4";
