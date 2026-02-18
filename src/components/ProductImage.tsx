import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  direction?: "left" | "right" | "center";
  fadeBottom?: boolean;
  className?: string;
}

export function ProductImage({
  src,
  alt,
  width = 1000,
  height = 800,
  direction = "center",
  className = "",
}: ProductImageProps) {
  return (
    <div className={`product-image-perspective ${className}`}>
      <div
        className={`product-image-glow product-tilt-${direction} overflow-hidden rounded-xl`}
      >
        {/* macOS-style title bar */}
        <div className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Screenshot */}
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block w-full"
          />
        </div>
      </div>
    </div>
  );
}
