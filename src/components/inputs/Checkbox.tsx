"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { errorBase, helperBase, labelBase } from "./input-styles";

interface CheckboxProps {
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

export function Checkbox({
  id,
  label,
  checked,
  onCheckedChange,
  error,
  helperText,
  required,
  disabled,
  className = "",
}: CheckboxProps) {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <CheckboxPrimitive.Root
          id={id}
          checked={checked}
          onCheckedChange={(value) => onCheckedChange?.(value === true)}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`focus:ring-primary-200 focus:border-primary-300 data-[state=checked]:border-primary-300 data-[state=checked]:bg-primary-300 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-gray-200 bg-white transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${error ? "border-tertiary-300" : ""} ${className}`.trim()}
        >
          <CheckboxPrimitive.Indicator>
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

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
