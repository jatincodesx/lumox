import { BrandMark } from "@/components/brand/BrandMark";
import { cn } from "@/lib/utils";

type LumoxLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export function LumoxLogo({ className, markClassName, textClassName }: LumoxLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.035] shadow-[0_0_28px_hsl(var(--lumox-primary)/0.26)]">
        <BrandMark className={cn("h-6 w-6", markClassName)} />
      </span>
      <span className={cn("text-sm font-semibold tracking-wide text-ink", textClassName)}>
        Lumox Technologies
      </span>
    </span>
  );
}
