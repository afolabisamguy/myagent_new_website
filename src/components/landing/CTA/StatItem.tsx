import { cn } from "../../../lib/cn";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <dt className="order-2 text-sm text-gray-500">{label}</dt>
      <dd className="order-1 text-xl sm:text-2xl font-semibold text-[#CE890E]">
        {value}
      </dd>
    </div>
  );
}
