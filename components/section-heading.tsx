interface SectionHeadingProps {
  number: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({
  number,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      {!centered && (
        <div className="ml-4 hidden h-px flex-1 bg-border sm:block" />
      )}
    </div>
  );
}
