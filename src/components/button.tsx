import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const variants = {
  primary:
    "bg-neutral-100 text-black hover:bg-neutral-300 disabled:bg-neutral-700 disabled:text-neutral-400",
  secondary:
    "bg-neutral-700 text-neutral-100 hover:bg-neutral-800 disabled:bg-neutral-800 disabled:text-neutral-400",
  outline:
    "bg-transparent text-neutral-100 border border-neutral-700 hover:bg-neutral-700 disabled:text-neutral-400 disabled:hover:bg-transparent",
  ghost:
    "bg-transparent text-neutral-100 hover:bg-neutral-700 disabled:text-neutral-400 disabled:hover:bg-transparent",
};

const sizes = {
  sm: "h-8 px-3",
  base: "h-10 px-4",
  lg: "h-12 px-5",
  icon: "h-10 w-10",
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  disabled?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "base",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "rounded-md text-sm font-medium select-none transition-colors duration-300 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
