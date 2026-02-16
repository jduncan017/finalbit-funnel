"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import {
  inputBase,
  inputDisabled,
  inputError,
  inputFocus,
  inputPadding,
} from "./input-styles";
import { InputWrapper } from "./InputWrapper";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Select({
  id,
  label,
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  error,
  helperText,
  required,
  disabled,
  className = "",
}: SelectProps) {
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
      <SelectPrimitive.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <SelectPrimitive.Trigger
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${inputBase} ${inputPadding} ${inputFocus} ${inputDisabled} flex items-center justify-between ${error ? inputError : ""} ${className}`.trim()}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-300"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className="z-50 max-h-60 overflow-auto rounded-[8px] border border-gray-200 bg-white shadow-lg"
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className="data-[highlighted]:bg-primary-100 flex cursor-pointer items-center gap-2 rounded-[4px] px-3 py-2 text-base text-neutral-400 outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
                >
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="ml-auto">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-primary-300"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </InputWrapper>
  );
}
