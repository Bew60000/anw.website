import { cn } from "../../libs/utils";

interface TitleTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function TitleText({ children, className }: TitleTextProps) {
  return (
    <div
      className={cn(
        "text-2xl lg:text-4xl font-bold flex justify-center uppercase mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent ",
        className
      )}
    >
      {children}
    </div>
  );
}
