import { cn } from "../../../lib/cn";
import logo from "../../../assets/agent_icon.png";

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a href="#" className="flex items-center gap-2">
        <img
          src={logo}
          alt="MyAgent logo"
          className="h-10 w-10 rounded-lg object-contain"
        />
        <span className="text-xl font-semibold text-black">My Agent</span>
      </a>
    </div>
  );
}
