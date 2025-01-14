import { ReactNode } from "react";

const BoxText = (props: {
  title: string | string[] | ReactNode | ReactNode[];
  description: string | string[] | ReactNode | ReactNode[];
  className?: string;
  id?: string;
}) => {
  let titles = [];
  let descriptions: Array<string | ReactNode> = [];

  if (
    Array.isArray(props.title) &&
    Array.isArray(props.description) &&
    props.title.length === props.description.length
  ) {
    titles = props.title;
    descriptions = props.description;
  } else if (!Array.isArray(props.title) && !Array.isArray(props.description)) {
    titles.push(props.title);
    descriptions.push(props.description);
  }

  return (
    <div
      id={props.id}
      className={`${props.className ?? ""} shadow-section-4-shadow flex max-w-[358px] flex-col items-start justify-center gap-4 rounded-[24px] bg-white p-[24px] leading-[normal] lg:max-w-[676px] lg:p-[40px]`}
    >
      {descriptions.length &&
        titles.map((title, index) => (
          <span key={index}>
            <div className="max-w-[300px] whitespace-break-spaces font-raleway-black text-[24px] font-[900] tracking-[-1.75px] lg:max-w-none lg:text-[48px]">
              {title}
            </div>
            <div className="whitespace-break-spaces font-raleway-regular text-[16px] font-[500] lg:text-[24px]">
              {descriptions[index]}
            </div>
          </span>
        ))}
    </div>
  );
};

export default BoxText;
