import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block h-9 w-9 bg-contain bg-center bg-no-repeat", className)}
      style={{ backgroundImage: "url('/brand/lumox-logo-white-512.png')" }}
    />
  );
}
