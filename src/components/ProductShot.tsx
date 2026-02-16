import { Monitor } from "lucide-react";

interface ProductShotProps {
  description: string;
  aspectRatio?: "16/9" | "4/3" | "auto";
  className?: string;
}

export function ProductShot({
  description,
  aspectRatio = "16/9",
  className = "",
}: ProductShotProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-400/20 bg-gray-400/10 p-8 ${className}`}
      style={{ aspectRatio }}
    >
      <Monitor className="h-12 w-12 text-neutral-300" strokeWidth={1.5} />
      <p className="max-w-sm text-center text-sm text-neutral-300">
        {description}
      </p>
    </div>
  );
}
