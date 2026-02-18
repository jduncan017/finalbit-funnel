"use client";

import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { ChevronDown, X, Check } from "lucide-react";
import {
  inputBase,
  inputDisabled,
  inputError,
  inputFocus,
  inputPadding,
} from "./input-styles";
import { InputWrapper } from "./InputWrapper";

interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  id: string;
  label: string;
  options: MultiSelectOption[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  max?: number;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function MultiSelect({
  id,
  label,
  options,
  value = [],
  onValueChange,
  placeholder = "Select options",
  max,
  error,
  helperText,
  required,
  disabled,
  className = "",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  function toggleOption(optionValue: string) {
    if (value.includes(optionValue)) {
      onValueChange?.(value.filter((v) => v !== optionValue));
    } else if (!max || value.length < max) {
      onValueChange?.([...value, optionValue]);
    }
  }

  function removeOption(
    optionValue: string,
    e: React.MouseEvent | React.KeyboardEvent,
  ) {
    e.stopPropagation();
    e.preventDefault();
    onValueChange?.(value.filter((v) => v !== optionValue));
  }

  function getLabelForValue(val: string) {
    return options.find((o) => o.value === val)?.label ?? val;
  }

  return (
    <InputWrapper
      id={id}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <Popover.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
        <Popover.Trigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            aria-haspopup="listbox"
            aria-expanded={open}
            className={`${inputBase} ${inputPadding} ${inputFocus} ${inputDisabled} flex min-h-[42px] flex-wrap items-center gap-1.5 text-left ${error ? inputError : ""} ${className}`.trim()}
          >
            {value.length === 0 && (
              <span className="text-gray-300">{placeholder}</span>
            )}
            {value.map((val) => (
              <span
                key={val}
                className="bg-primary-100 text-primary-400 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-sm"
              >
                {getLabelForValue(val)}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => removeOption(val, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      removeOption(val, e);
                    }
                  }}
                  aria-label={`Remove ${getLabelForValue(val)}`}
                  className="hover:bg-primary-200 ml-0.5 cursor-pointer rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                </span>
              </span>
            ))}
            <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-gray-300" />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={4}
            align="start"
            className="z-50 max-h-60 w-[var(--radix-popover-trigger-width)] overflow-auto rounded-[8px] border border-gray-200 bg-white p-1 shadow-lg"
            role="listbox"
            aria-multiselectable="true"
            aria-label={label}
          >
            {options.map((option) => {
              const isSelected = value.includes(option.value);
              const isAtMax = !!max && value.length >= max && !isSelected;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  disabled={option.disabled ?? isAtMax}
                  onClick={() => toggleOption(option.value)}
                  className="hover:bg-primary-100 focus:bg-primary-100 flex w-full cursor-pointer items-center gap-2 rounded-[4px] px-3 py-2 text-left text-base text-neutral-400 transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="flex-1">{option.label}</span>
                  {isSelected && (
                    <Check className="h-4 w-4 shrink-0 text-primary-300" />
                  )}
                </button>
              );
            })}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </InputWrapper>
  );
}
