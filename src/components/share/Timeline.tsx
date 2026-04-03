interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative pl-20">
      <div className="absolute left-[62px] top-[12px] bottom-0 w-[2px] bg-gray-300" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
}

export function TimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute -left-[23px] top-1.5 h-3 w-3 rounded-full border-2 bg-fuchsia-500 shadow z-10" />
      <div className="pl-2">{children}</div>
    </div>
  );
}

