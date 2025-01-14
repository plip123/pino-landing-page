import React from "react";

import { type TSections } from "../../Section.interface";
import CardsRow from "./CardsRow";

const SectionCard = ({ cards }: { cards: Array<TSections> }) => {
  const firstHalf = cards.slice(0, 3);
  const secondHalf = cards.slice(3);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-10 py-6 2xl:gap-8 2xl:p-16">
      <CardsRow items={firstHalf} />
      <CardsRow items={secondHalf} />
    </div>
  );
};

export default SectionCard;
