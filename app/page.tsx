"use client";

import ContactSection from "@/components/ContactSection";
import IntroSection from "@/components/IntroSection";
import InvitationSection from "@/components/InvitationSection";
import WeddingPhotoSection from "@/components/WeddingPhotoSection";
import { cn } from "@/lib/cn";
import { useSakuraEffect } from "@/lib/hook/use-sakura-effect";
import dynamic from "next/dynamic";
import { forceUtc, utcMsOfKorea } from "@/lib/time";
import MovieSection from "@/components/MovieSection";
import LocationSection from "@/components/LocationSection";
// import GallerySection from "@/components/GallerySection";

const CalendarSection = dynamic(() => import("@/components/CalendarSection"), {
  ssr: false,
});
const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false,
});

export default function Home() {
  // * 로컬 시간대를 무시하고 한국 시간대로 고정
  const eventDate = forceUtc({
    date: "2024-12-10T13:30:00+09:00",
    utcMs: utcMsOfKorea,
  });

  // * 벚꽃이 흩날리는 효과
  useSakuraEffect();

  return (
    <main
      className={cn(
        "flex flex-col items-center w-full min-h-screen pt-48 select-none",
        "bg-gradient-to-br from-[#fff5e5] via-[#fde2e4] to-[#e2ece9]"
      )}
      aria-label="김철수 김영희 결혼식 청첩장"
    >
      <div className="w-full max-w-[720px]">
        <IntroSection eventDate={eventDate} names={["김철수", "김영희"]} />

        <WeddingPhotoSection
          src="/wedding-photo.webp"
          alt="둘이 마주보며 맞절을 하는 모습"
        />

        <InvitationSection
          invitation={
            <>
              서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며 걸어갈 수
              있는 큰 사랑으로 키우고자 합니다.
              <br aria-hidden /> 저희 두 사람이 사랑의 이름으로 지켜나갈 수
              있도록 앞날을 축복해 주시면 감사하겠습니다.
            </>
          }
          familyNames={
            <>
              <p aria-label="김철수 김영희의 장남 철수">
                <span aria-hidden>
                  김철수 · 김영희<span className="text-3xl">의 장남</span> 철수
                </span>
              </p>
              <p aria-label="김철수 김영희의 장녀 영희">
                <span aria-hidden>
                  김철수 · 김영희<span className="text-3xl">의 장녀</span> 영희
                </span>
              </p>
            </>
          }
          sectionBackgroundImage="/wedding-photo.webp"
        />
        <ContactSection
          primaryContacts={[
            {
              title: "신랑",
              phoneNumber: "010-1234-5678",
              highlightColor: "#4ec0ef",
            },
            {
              title: "신부",
              phoneNumber: "010-8765-4321",
              highlightColor: "#F9A8D4",
            },
          ]}
          leftFamilyContacts={[
            {
              title: "아버지",
              name: "김철수",
              phoneNumber: "010-1234-5678",
              highlightColor: "#4ec0ef",
            },
            {
              title: "어머니",
              name: "김영희",
              phoneNumber: "010-1234-5678",
              highlightColor: "#4ec0ef",
            },
          ]}
          rightFamilyContacts={[
            {
              title: "아버지",
              name: "김철수",
              phoneNumber: "010-1234-5678",
              highlightColor: "#F9A8D4",
            },
            {
              title: "어머니",
              name: "김영희",
              phoneNumber: "010-1234-5678",
              highlightColor: "#F9A8D4",
            },
          ]}
        />

        <CalendarSection eventDate={eventDate} />
        <GallerySection
          images={[
            { src: "/wedding-photo.webp", alt: "고개 드는 장면" },
            { src: "/wedding-photo.webp", alt: "웃는 장면" },
            { src: "/wedding-photo.webp", alt: "서로 바라보는 장면" },
            { src: "/wedding-photo.webp", alt: "같이 있는 장면" },
            { src: "/wedding-photo.webp", alt: "이쁜 장면" },
            { src: "/wedding-photo.webp", alt: "마주 치는 장면" },
            { src: "/wedding-photo.webp", alt: "호텔 장면" },
            { src: "/wedding-photo.webp", alt: "바라보는 장면" },
            { src: "/wedding-photo.webp", alt: "서로 웃는 장면" },
            { src: "/wedding-photo.webp", alt: "같이 있는 장면" },
            { src: "/wedding-photo.webp", alt: "이쁜 장면" },
            { src: "/wedding-photo.webp", alt: "마주 치는 장면" },
          ]}
        />

        <MovieSection description="두 사람의 아름다운 시작을 함께 해주세요.">
          <iframe
            src="https://www.youtube.com/embed/mb2j87IDeTI"
            title="4년 공개연애 끝, 행복했던 우리의 결혼식"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="border-none w-full min-h-[40rem]"
          />
        </MovieSection>

        <LocationSection />
      </div>
    </main>
  );
}
