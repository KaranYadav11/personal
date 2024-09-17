import { twMerge } from "tailwind-merge";

function CardHeader({ title, description, className, svgs }) {
  return (
    <div className={twMerge("flex flex-col p-6 md:px-10 md:py-8", className)}>
      <div className="inline-flex items-center gap-2">
        <div>{svgs}</div>
        <h3 className="font-calistoga text-3xl">{title}</h3>
      </div>
      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
      <p className="text-sm  lg:text-base text-white/60 mt-1 lg:mt-2">
        {description}
      </p>
    </div>
  );
}

export default CardHeader;
