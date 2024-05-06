import { ReactNode } from "react";

export interface MovieSectionProps {
  children: ReactNode;
  description: string;
}

export default function MovieSection({
  children,
  description,
}: MovieSectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-normal text-center color-[#483A33] gap-16 my-20"
      aria-label="혼인 영상 소개"
    >
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
        <p aria-hidden>Movie</p>
      </div>
      {children}

      <div className="w-[1px] h-20 bg-[#D4BDA2]" />
      <div className="text-balance break-keep max-w-[30rem] text-4xl leading-[4rem]">
        <p aria-label={description}>{description}</p>
      </div>
    </section>
  );
}
