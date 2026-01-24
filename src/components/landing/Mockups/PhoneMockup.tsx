import { cn } from "../../../lib/cn";

interface PhoneMockupProps {
  src: string;
  alt: string;
  position: "left" | "right";
  className?: string;
}

export function PhoneMockup({
  src,
  alt,
  position,
  className,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative",
        position === "left" && "rotate-[-8deg] translate-x-4",
        position === "right" && "rotate-[8deg] -translate-x-4",
        className,
      )}
    >
      <div className="relative h-[400px] w-[200px] overflow-hidden rounded-[2rem] border-8 border-gray-900 shadow-2xl sm:h-[500px] sm:w-[250px] sm:rounded-[2.5rem]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
