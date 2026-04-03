import { descriptions } from "../../libs/Resume";
import { cn } from "../../libs/utils";

type DescriptionKey = keyof (typeof descriptions)[number];

interface DescriptionTextProps {
  field: DescriptionKey;
  className?: string;
}

export default function DescriptionText({
  field,
  className,
}: DescriptionTextProps) {
  return (
    <>
      {descriptions.map((description, index) => (
        <p key={index} className={cn("text-[14px]", className)}>
          {description[field]}
        </p>
      ))}
    </>
  );
}

