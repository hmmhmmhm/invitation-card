import { Nanum_Myeongjo } from "next/font/google";
import Calendar from "react-calendar";
import { cn } from "@/lib/cn";
import "react-calendar/dist/Calendar.css";
import "./CalendarSection.css";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export interface CalendarSectionProps {
  eventDate: Date;
}

export default function CalendarSection({ eventDate }: CalendarSectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-bold text-5xl text-center text-[#483A33] gap-14 mt-36 *:w-full p-8"
      aria-label="결혼식 일시 캘린더"
    >
      <div className="bg-white rounded-[3rem] shadow-[0px_0px_20px_#e0e0e0] p-8 select-none overflow-hidden">
        <div className="mb-8 flex justify-between p-[1em] border-[#f9a9d4] items-center">
          <div className="text-[#f9a9d4]">
            <span className="text-6xl">{eventDate.getFullYear()}</span>
            <span className="text-6xl">년</span>
            <span className="text-6xl"> {eventDate.getMonth() + 1}</span>
            <span className="text-6xl">월</span>
          </div>
          <div className="text-[#f9a9d4]">
            <span className="text-4xl">
              {eventDate.getHours() >= 12 ? "오후" : "오전"}
            </span>
            <span className="text-4xl">
              {" "}
              {(eventDate.getHours() > 12
                ? eventDate.getHours() - 12
                : eventDate.getHours()
              ).toString()}
              시
            </span>{" "}
            {eventDate.getMinutes().toString() === "0" ? (
              ""
            ) : (
              <span className="text-4xl">
                {eventDate.getMinutes().toString()}분
              </span>
            )}
          </div>
        </div>
        <Calendar
          className={cn(nanumMyeongjo.className, "select-none")}
          value={eventDate}
          allowPartialRange={false}
          selectRange={false}
          formatDay={(_locale, date) => date.getDate().toString()}
          calendarType="gregory"
          tileDisabled={({ date }) => {
            // date 가 eventDate 와 같은 달이 아닌경우 false
            if (date.getMonth() !== eventDate.getMonth()) return true;
            return false;
          }}
        />
      </div>
    </section>
  );
}
