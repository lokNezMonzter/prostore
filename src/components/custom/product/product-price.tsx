import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const priceString = value.toFixed(2);
  const [integer, float] = priceString.split(".");
  return (
    <span className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integer}
      <span className="text-xs align-super">.{float}</span>
    </span>
  );
}
