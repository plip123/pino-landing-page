import React from "react";

const SectionMain = ({ title }: { title: string }) => {
  return (
    <div className="ml-16 flex h-full w-full items-center py-10">
      <h3 className="text-[60px] font-black sm:text-[100px] lg:text-[200px]">
        {title}
      </h3>
    </div>
  );
};

export default SectionMain;
