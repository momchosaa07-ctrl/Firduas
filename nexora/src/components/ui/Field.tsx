"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

const controlBase =
  "w-full rounded-xl border bg-bg/60 px-4 py-3 text-[0.925rem] text-fg " +
  "placeholder:text-fg-subtle transition-colors " +
  "hover:border-line-strong focus:border-accent focus:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-60";

type BaseProps = {
  label: string;
  error?: string | undefined;
  hint?: string;
  required?: boolean;
  className?: string;
};

function Wrapper({
  label,
  error,
  hint,
  required,
  className,
  id,
  errorId,
  hintId,
  children,
}: BaseProps & {
  id: string;
  errorId: string;
  hintId: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="mb-2 text-[0.82rem] font-medium text-fg">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-fg-subtle">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={hintId} className="mt-1.5 text-[0.75rem] text-fg-subtle">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-[0.75rem] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "id">;

export function TextField({
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: InputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <Wrapper {...{ label, error, hint, required, className, id, errorId, hintId }}>
      <input
        {...rest}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={cn(controlBase, error ? "border-danger" : "border-line")}
      />
    </Wrapper>
  );
}

type TextareaProps = BaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id">;

export function TextAreaField({
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: TextareaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <Wrapper {...{ label, error, hint, required, className, id, errorId, hintId }}>
      <textarea
        {...rest}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={cn(
          controlBase,
          "min-h-32 resize-y",
          error ? "border-danger" : "border-line",
        )}
      />
    </Wrapper>
  );
}

type SelectProps = BaseProps & {
  options: readonly string[];
  placeholder: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className" | "id">;

export function SelectField({
  label,
  error,
  hint,
  required,
  className,
  options,
  placeholder,
  ...rest
}: SelectProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <Wrapper {...{ label, error, hint, required, className, id, errorId, hintId }}>
      <div className="relative">
        <select
          {...rest}
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(
            controlBase,
            "cursor-pointer appearance-none pr-10",
            error ? "border-danger" : "border-line",
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="pointer-events-none absolute top-1/2 right-4 size-3.5 -translate-y-1/2 text-fg-subtle"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </div>
    </Wrapper>
  );
}
