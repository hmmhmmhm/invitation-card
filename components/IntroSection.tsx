import { cn } from "@/lib/cn";
import { Fragment } from "react";

export interface IntroSectionProps {
  eventDate: Date;
  names: string[];
}

export default function IntroSection({ eventDate, names }: IntroSectionProps) {
  const eventDateString = eventDate
    .toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(/(\d+):(\d+)/, (_, hour, minute) => `${hour}시 ${minute}분`)
    .replace(/ 00분/, "")
    .trim();

  return (
    <>
      <section
        className={cn(
          "flex justify-center items-center w-full flex-col font-bold text-7xl text-center text-[#483A33] gap-32"
        )}
        aria-label="결혼식에 초대합니다"
      >
        <p aria-hidden>시</p>
        <p aria-hidden>작</p>
      </section>
      <section
        className={cn(
          "flex justify-center items-center w-full flex-col font-normal text-3xl text-center text-[#483A33] gap-6 mt-[7.5rem]"
        )}
        aria-label="결혼식 일시 및 신랑신부 이름"
      >
        <p aria-roledescription="date" aria-label={eventDateString}>
          {eventDateString}
        </p>
        <div className="flex flex-row gap-3 text-4xl border-[#D4BDA2] border-t-[1px] pt-6">
          {names.map((name, index) => (
            <Fragment key={index}>
              <p key={index} aria-label={name}>
                {name}
              </p>
              {index < names.length - 1 && (
                <p key={`dot-${index}`} className="mx-1" aria-hidden>
                  ·
                </p>
              )}
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
