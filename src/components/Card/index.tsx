import React from "react";
import Image from "next/image";
import { useNavbarItems } from "@/hooks/NavbarItems";
import Atropos from "atropos/react";
import { twMerge } from "tailwind-merge";

import { Icon } from "../Common/Icon";
import { SectionTheme } from "../Sections/Section.interface";
import {
  type ICard,
  type TIconsPositionCard,
  type TVariantCard,
} from "./Card.interface";

const Card = ({
  title,
  description,
  image,
  sizeImage,
  positionImage,
  icons,
  uriIcons,
  iconsPosition = "start",
  size = "base",
  theme = SectionTheme.light,
  hoverEffect = false,
  className,
  classNameImg,
  classNameHoverEffect,
}: ICard) => {
  const { getRedirectUri } = useNavbarItems();

  const contentClass: { [size in TVariantCard]: string } = {
    sm: "p-4 rounded-3xl gap-1 2xl:gap-2 text-base",
    base: "p-4 rounded-3xl gap-1 2xl:gap-2 text-base",
    lg: "p-8 rounded-[40px] gap-2 2xl:gap-4 text-base",
    xl: "p-8 rounded-[40px] gap-2 2xl:gap-4 text-base 2xl:text-lg",
  };

  const titleClass: { [size in TVariantCard]: string } = {
    sm: "text-xl text-bold",
    base: "text-xl 2xl:text-2xl font-bold",
    lg: "text-xl 2xl:text-2xl font-black",
    xl: "text-5xl 2xl:text-6xl font-black",
  };

  const themeClass: string =
    theme === SectionTheme.light
      ? "bg-brand-primary text-text-primary"
      : theme === SectionTheme.extraLight
        ? "bg-brand-secondary text-text-primary"
        : "bg-brand-dark text-text-secondary";

  const positionImageClass: string =
    positionImage === "start"
      ? "flex justify-start"
      : positionImage == "center"
        ? "flex justify-center"
        : "flex justify-end";

  const finalContentClasses = twMerge(
    "flex flex-col",
    contentClass[size],
    themeClass,
    className,
  );

  const IconsClass: { [iconsPosition in TIconsPositionCard]: string } = {
    start: "flex gap-2",
    end: "flex gap-2 mt-auto",
  };

  const RenderCard = () => {
    return (
      <div className={finalContentClasses}>
        {!!image && (
          <div className={`w-full ${positionImageClass}`}>
            <Image
              width={sizeImage}
              height={sizeImage}
              src={image}
              alt={title}
              className={classNameImg ?? ""}
            />
          </div>
        )}
        <h4 className={titleClass[size]}>{title}</h4>
        <p className="whitespace-pre-wrap font-semibold">{description}</p>
        <div className={IconsClass[iconsPosition]}>
          {icons?.map((icon, key) => (
            <Icon
              key={key}
              icon={icon.icon}
              size={50}
              className={!!uriIcons ? "cursor-pointer" : ""}
              onClick={() => void getRedirectUri(uriIcons?.[key] ?? "#")}
            />
          ))}
        </div>
      </div>
    );
  };

  if (hoverEffect)
    return (
      <Atropos className={`rounded-3xl ${classNameHoverEffect}`}>
        <RenderCard />
      </Atropos>
    );

  return <RenderCard />;
};

export default Card;
