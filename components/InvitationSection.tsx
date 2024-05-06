import type { ReactNode } from "react";

export interface InvitationSectionProps {
  invitation: ReactNode;
  familyNames: ReactNode;
  sectionBackgroundImage?: string;
}

export default function InvitationSection({
  invitation,
  familyNames,
  sectionBackgroundImage,
}: InvitationSectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-normal text-center color-[#483A33] gap-16 my-20"
      aria-label="초대 내용 및 가족 소개"
    >
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
        <p aria-label="초대 내용">Invitation</p>
      </div>
      <div className="text-balance break-keep max-w-[30rem] text-4xl leading-[4rem]">
        {invitation}
      </div>

      <div className="w-[1px] h-20 bg-[#D4BDA2]" />
      <div className="text-balance break-keep max-w-[30rem] text-4xl leading-[4rem]">
        {familyNames}
      </div>

      <div className="relative w-full h-64 flex justify-center items-center text-4xl tracking-[2rem] rounded-lg text-white overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-top"
          style={{
            backgroundImage: `url(${sectionBackgroundImage})`,
          }}
        />
        <div className="absolute w-full h-full backdrop-blur-sm z-10 brightness-75" />
        <p className="z-10" aria-hidden>소중한 당신을 초대합니다</p>
      </div>
    </section>
  );
}
