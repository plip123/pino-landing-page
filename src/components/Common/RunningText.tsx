import { type ReactNode } from "react";

const TextAnimated = (props: {
  animation: string;
  className: string;
  children: ReactNode;
}) => {
  const items = Array.from({ length: 20 });

  return (
    <div className={`${props.className} absolute inset-x-0 z-10`}>
      <div className={`${props.animation} flex gap-4 whitespace-nowrap`}>
        {items.map((_, index) => (
          <span
            key={index}
            className="text-brand-green-overlay inline-block font-raleway-black"
          >
            {props.children}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextAnimated;
