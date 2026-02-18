"use client";

import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </InputWrapper>
    );
  },
);
