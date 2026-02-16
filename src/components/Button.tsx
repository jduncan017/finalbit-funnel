import { type ReactNode } from "react";
import Link from "next/link";
import { type RoundedSize, roundedClasses } from "./shared-styles";
import {
  type ButtonVariant,
  type ButtonSize,
  buttonBase,
  buttonFocus,
  variantClasses,
  sizeClasses,
  spinnerClasses,
} from "./button-styles";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: RoundedSize;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

type ButtonElementProps = BaseProps & {
  as?: "button";
  type?: "button" | "submit" | "reset";
  href?: never;
} & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps | "type"
  >;

type AnchorElementProps = BaseProps & {
  as: "a";
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

type LinkElementProps = BaseProps & {
  as: "link";
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

type ButtonProps = ButtonElementProps | AnchorElementProps | LinkElementProps;

function Spinner() {
  return (
    <svg
      className={spinnerClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function Button({
  children,
  as = "button",
  variant = "primary",
  size = "md",
  rounded = "md",
  loading = false,
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    buttonBase,
    buttonFocus,
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    loading ? "pointer-events-none opacity-75" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );

  if (as === "button") {
    const { type = "button", ...buttonRest } = rest as Omit<
      ButtonElementProps,
      keyof BaseProps
    >;
    return (
      <button
        type={type}
        disabled={disabled || loading}
        className={`${classes} disabled:cursor-not-allowed disabled:opacity-50`}
        aria-busy={loading || undefined}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }

  const linkDisabledClasses =
    disabled || loading ? "pointer-events-none opacity-50" : "";
  const linkProps = {
    className: `${classes} ${linkDisabledClasses}`,
    "aria-disabled": disabled || loading || undefined,
    "aria-busy": loading || undefined,
    tabIndex: disabled || loading ? -1 : undefined,
  };

  if (as === "link") {
    const { href, ...linkRest } = rest as Omit<
      LinkElementProps,
      keyof BaseProps
    >;
    return (
      <Link href={href} {...linkProps} {...linkRest}>
        {content}
      </Link>
    );
  }

  // as === "a"
  const { href, ...anchorRest } = rest as Omit<
    AnchorElementProps,
    keyof BaseProps
  >;
  return (
    <a href={href} {...linkProps} {...anchorRest}>
      {content}
    </a>
  );
}
