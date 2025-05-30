import { cn } from "../../libs/utils";

interface BoxTextProps {
  children: React.ReactNode;
  id?: string;
  className?: string; 
}

export default function BoxText({ children, id, className }: BoxTextProps) {
  return (
    <div
      id={id}
      className={cn(
        "text-white border border-white/15 rounded-xl p-5 w-full scroll-smooth",
        className
      )}
    >
      {children}
    </div>
  );
}
