import React from "react";
import Image from "next/image";

export interface IIcon {
  icon: string;
  size?: number | string;
  color?: string;
  className?: string;
  IconType?: "svg" | "png" | "jpeg" | "url" | "pi";
  priority?: boolean;
  alt?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export type TIcon = IIcon;

export const Icon = ({
  icon,
  size = "auto",
  color,
  className,
  IconType = "svg",
  alt = "Icon",
  style,
  onClick,
}: IIcon) => {
  const url = IconType !== "url" ? `/icons/${icon}.${IconType}` : icon;
  const sizeFormated = Number(size);

  return (
    <>
      {color && IconType !== "url" && (
        <div
          className={className}
          onClick={onClick}
          style={{
            WebkitMaskImage: `url('${url}')`,
            WebkitAlignItems: "center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100%",
            mask: `url('${url}') center center/100% 100% no-repeat`,
            backgroundColor: color,
            width: size === "auto" ? "auto" : `${size}px`,
            height: size === "auto" ? "auto" : `${size}px`,
            transform: "unset !important",
          }}
        />
      )}
      {!color && IconType !== "pi" && !icon.includes("pi") && (
        <Image
          src={`${url}`}
          width={Number.isNaN(sizeFormated) ? 18 : sizeFormated}
          height={Number.isNaN(sizeFormated) ? 18 : sizeFormated}
          className={`${className ?? ""} ${size === "auto" ? "h-auto w-auto" : ""}`}
          alt={alt}
          onClick={onClick}
          style={{
            height: "auto",
          }}
          priority
        />
      )}
      {(IconType === "pi" || icon.includes("pi")) && (
        <i className={`pi ${icon} ${className ?? ""}`} style={style} />
      )}
    </>
  );
};
