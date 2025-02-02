import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
function Card({ className, children }) {
  return (
    <div
      className={twMerge(
        `bg-gradient-to-b from-black to-gray-900  rounded-3xl relative after:content-[''] after:z-10 overflow-hidden after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline after:pointer-events-none after:outline-white/20`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
