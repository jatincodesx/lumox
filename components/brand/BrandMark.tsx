import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <img
      src="/brand/lumox-logo-white-512.png"
      alt="Lumox Technologies logo"
      className={cn("h-9 w-9 object-contain", className)}
      width={512}
      height={512}
      loading="eager"
      decoding="async"
    />
  );
}
