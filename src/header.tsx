import { Avatar } from "react-lorem-ipsum";

export const Header = () => (
  <header className="relative border-b border-divider">
    <span className="text-secondary text-sm uppercase">
      Thursday, August 8th
    </span>
    <h1 className="font-bold text-white mt-1.5 mb-3">Today</h1>
    <div className="absolute bg-divider rounded-full bottom-3 right-0 overflow-hidden">
      <Avatar className="size-10" />
    </div>
  </header>
);
