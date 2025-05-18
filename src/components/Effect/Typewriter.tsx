import { useEffect, useState } from "react";
import { cn } from "../../libs/utils";

type TypewriterProps = {
  text: string;
  speed: number;
  pause: number;
  className?: string;
};

export default function Typewriter({
  text,
  speed,
  pause,
  className,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <div className={cn("whitespace-pre text-white", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
