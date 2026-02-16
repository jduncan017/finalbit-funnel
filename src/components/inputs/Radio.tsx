"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { errorBase, helperBase, labelBase } from "./input-styles";

type RadioLayout = "vertical" | "horizontal";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioProps {
  id: string;
  label: string;
  options: RadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  layout?: RadioLayout;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const layoutClasses: Record<RadioLayout, string> = {
  vertical: "flex flex-col gap-2",
  horizontal: "flex flex-wrap gap-4",
};

export function Radio({
  id,
  label,
  options,
  value,
  onValueChange,
  layout = "vertical",
  error,
  helperText,
  required,
  disabled,
  className = "",
}: RadioProps) {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="flex flex-col gap-1.5">
      <span className={labelBase}>
        {label}
        {required && <span className="text-tertiary-300 ml-0.5">*</span>}
      </span>

      <RadioGroupPrimitive.Root
        id={id}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        aria-label={label}
        className={`${layoutClasses[layout]} ${className}`.trim()}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <RadioGroupPrimitive.Item
              id={`${id}-${option.value}`}
              value={option.value}
              disabled={option.disabled}
              className={`focus:ring-primary-200 focus:border-primary-300 data-[state=checked]:border-primary-300 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${error ? "border-tertiary-300" : ""}`}
            >
              <RadioGroupPrimitive.Indicator className="bg-primary-300 flex h-2.5 w-2.5 rounded-full" />
            </RadioGroupPrimitive.Item>
            <label
              htmlFor={`${id}-${option.value}`}
              className="cursor-pointer text-base text-neutral-400"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroupPrimitive.Root>

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
