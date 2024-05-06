import { cn } from "@/lib/cn";
import Image from "next/image";

export interface WeddingPhotoSectionProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function WeddingPhotoSection({
  src,
  alt,
  className,
  width,
  height,
}: WeddingPhotoSectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-bold text-5xl text-center color-[#483A33] gap-[12.5rem] mt-24"
      aria-label="청첩장 사진"
    >
      <div className="flex flex-col gap-6 overflow-hidden w-full">
        <Image
          src={src}
          alt={alt}
          width={width ?? 1024}
          height={height ?? 1024}
          className={cn("rounded-lg w-full", className)}
          priority
        />
      </div>
    </section>
  );
}
