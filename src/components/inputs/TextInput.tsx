"use client";

import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import {
  inputBase,
  inputDisabled,
  inputError,
  inputFocus,
  inputPadding,
} from "./input-styles";
import { InputWrapper } from "./InputWrapper";

interface TextInputProps extends Omit<
  ComponentPropsWithoutRef<"input">,
  "id" | "className"
> {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
  className?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      id,
      label,
      error,
      helperText,
      required,
      disabled,
      className = "",
      type = "text",
      ...rest
    },
    ref,
  ) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const resolvedType = isPassword && showPassword ? "text" : type;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    return (
      <InputWrapper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        required={required}
      >
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={resolvedType}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={`${inputBase} ${inputPadding} ${inputFocus} ${inputDisabled} ${isPassword ? "pr-10" : ""} ${error ? inputError : ""} ${className}`.trim()}
            {...rest}
          />
          {isPassword && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 transition-colors hover:text-neutral-400 disabled:pointer-events-none"
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 2.5L17.5 17.5M8.82 8.82a1.67 1.67 0 0 0 2.36 2.36M5.94 5.94A8.27 8.27 0 0 0 2 10c1.53 3.33 4.5 5.5 8 5.5a7.8 7.8 0 0 0 4.06-1.12M10 4.5c3.5 0 6.47 2.17 8 5.5a8.6 8.6 0 0 1-1.64 2.56"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 10c1.53-3.33 4.5-5.5 8-5.5s6.47 2.17 8 5.5c-1.53 3.33-4.5 5.5-8 5.5S3.53 13.33 2 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </InputWrapper>
    );
  },
);
