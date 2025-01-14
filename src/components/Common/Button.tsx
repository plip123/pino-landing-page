import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TVariantButton =
  | "primary"
  | "outline"
  | "ghost"
  | "black"
  | "secondary"
  | "alarm";
export type TSizeButton = "base" | "sm" | "extraSm" | "lg" | "xl";
export type TShapeButton = "round" | "rectangle";
export type TStyleButton = "base" | "white";
export type TButton = {
  id?: string;
  children?: ReactNode | ReactNode[] | string;
  size?: TSizeButton;
  style?: TStyleButton;
  variant?: TVariantButton;
  shape?: TShapeButton;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void | Promise<void>;
  className?: string;
  loadingText?: string;
};

export const Button = ({
  id = "",
  children,
  variant = "primary",
  style = "base",
  size = "base",
  shape = "rectangle",
  fullWidth = false,
  disabled,
  loading,
  onClick,
  className,
  loadingText,
}: TButton) => {
  const whitePrimary =
    variant === "primary" && style == "white"
      ? "text-cta-default bg-white border-white"
      : "";
  const whiteOutline =
    variant === "outline" && style == "white"
      ? "text-white !bg-opacity-0 border-white"
      : "";

  const sizeClasses: { [size in TSizeButton]: string } = {
    xl: "text-[20px] font-bold h-[64px]",
    lg: "text-[20px] font-bold h-[60px]",
    base: "text-[16px] font-bold h-[50px]",
    sm: "text-[14px] font-bold h-[44px]",
    extraSm: "text-[12px] font-bold h-[30px]",
  };

  const variantClasses: { [variant in TVariantButton]: string } = {
    primary:
      "text-text-primary bg-brand-secondary border-cta-default shadow-primary",
    outline: "text-text-primary bg-white border-black",
    ghost: "text-text-secondary border-none",
    black: "text-white bg-black border-white",
    secondary: "text-cta-default border-cta-default bg-white shadow-secondary",
    alarm: "text-negative-default border-negative-default bg-white",
  };

  const circleSize = {
    xl: "!h-[76px] !w-[76px]",
    lg: "!h-[76px] !w-[76px]",
    base: "!h-[64px] !w-[64px]",
    sm: "!h-[48px] !w-[48px]",
    extraSm: "!h-[30px] !w-[30px]",
  };

  const shapeClasse: { [shape in TShapeButton]: string } = {
    rectangle: "rounded-lg",
    round: `rounded-full ${circleSize[size]}`,
  };

  const fullWidthClasses = fullWidth ? "w-full" : "";

  const disabledClassesObj: { [variant in TVariantButton]: string } = {
    primary: "!text-cta-subtle-2 !bg-cta-accent !border-cta-accent",
    outline: "!text-bg-disabled-2 !bg-white !border-bg-disabled-2",
    ghost: "!text-fg-on-disabled !bg-white !border-cta-subtle",
    black:
      "!text-fg-on-disabled !bg-cta-disabled-black !border-cta-disabled-black",
    secondary: "!text-cta-subtle !bg-cta-accent !border-cta-accent",
    alarm: "!text-negative-subtle !bg-negative-empty !border-negative-subtle",
  };

  const hoverClassesObj: { [variant in TVariantButton]: string } = {
    primary:
      "transition-all duration-300 ease-in-out hover:text-black hover:bg-cta-default hover:border-cta-default",
    outline:
      "hover:text-fg-muted hover:bg-white hover:border-fg-muted transition-all duration-300 ease-in-out hover:opacity-75",
    ghost: "transition-all duration-300 ease-in-out hover:opacity-75",
    black: "transition-all duration-300 ease-in-out hover:bg-opacity-75",
    secondary: "transition-all duration-300 ease-in-out hover:bg-opacity-75",
    alarm: "transition-all duration-300 ease-in-out hover:bg-opacity-75",
  };

  const activeClassesObj: { [variant in TVariantButton]: string } = {
    primary: "",
    outline: "",
    ghost: "",
    black: "",
    secondary: "",
    alarm: "",
  };

  const disabledClasses = disabled ? disabledClassesObj[variant] : "";

  const finalClasses = twMerge(
    "font-medium flex items-center justify-center rounded-lg border-solid border-[1px] p-4 transition-all duration-300 ease-in-out",
    sizeClasses[size],
    shapeClasse[shape],
    variantClasses[variant],
    hoverClassesObj[variant],
    activeClassesObj[variant],
    fullWidthClasses,
    disabledClasses,
    whitePrimary || whiteOutline,
  );

  return (
    <button
      id={id}
      className={`${finalClasses} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <>{loadingText ? loadingText : "Loading..."}</> : children}
    </button>
  );
};
