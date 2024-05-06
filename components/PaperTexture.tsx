import { cn } from "@/lib/cn";

export default function PaperTexture({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]",
        className
      )}
    >
      <div
        className="inset-0 w-full h-full transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
          opacity: 0.1,
          filter: "sepia(1)brightness(0.1)",
        }}
      ></div>
    </div>
  );
}
