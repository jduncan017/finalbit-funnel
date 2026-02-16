"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { errorBase, helperBase, labelBase } from "./input-styles";

interface ToggleProps {
  id: string;
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Toggle({
  id,
  label,
  checked,
  onCheckedChange,
  error,
  helperText,
  required,
  disabled,
  className = "",
}: ToggleProps) {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <SwitchPrimitive.Root
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`focus:ring-primary-200 data-[state=checked]:bg-primary-300 relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${error ? "ring-tertiary-200 ring-2" : ""} ${className}`.trim()}
        >
          <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5" />
        </SwitchPrimitive.Root>

        <label htmlFor={id} className={labelBase}>
          {label}
          {required && <span className="text-tertiary-300 ml-0.5">*</span>}
        </label>
      </div>

      {error && (
        <p id={errorId} role="alert" className={errorBase}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className={helperBase}>
          {helperText}
        </p>
      )}
    </div>
  );
}
