"use client";

import ContactSection from "@/components/ContactSection";
import IntroSection from "@/components/IntroSection";
import InvitationSection from "@/components/InvitationSection";
import WeddingPhotoSection from "@/components/WeddingPhotoSection";
import { cn } from "@/lib/cn";
import { useSakuraEffect } from "@/lib/hook/use-sakura-effect";
import dynamic from "next/dynamic";
import { forceUtc, utcMsOfKorea } from "@/lib/time";
// import MovieSection from "@/components/MovieSection";
import LocationSection from "@/components/LocationSection";
import GameButtonSection from "@/components/GameButtonSection";
import SendMoneySection from "@/components/SendMoneySection";

const CalendarSection = dynamic(() => import("@/components/CalendarSection"), {
  ssr: false,
});
const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false,
});

export default function Home() {
  // * 로컬 시간대를 무시하고 한국 시간대로 고정
  const eventDate = forceUtc({
    date: "2024-11-30T11:00:00+09:00",
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
      aria-label="박성준 최지은 결혼식 청첩장"
    >
      <div className="w-full max-w-[720px]">
        <IntroSection eventDate={eventDate} names={["박성준", "최지은"]} />

        <WeddingPhotoSection
          src="/wedding/lsh-0239.webp"
          alt="둘이 정면을 바라보며 웃는 모습"
          onClick={() => {
            (
              document.querySelector(
                'a[href="/wedding/lsh-0239.webp"]'
              ) as HTMLAnchorElement
            )?.click();
          }}
        />

        <GameButtonSection />

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
              <p aria-label="박성준 최지은의 장남 철수">
                <span aria-hidden>
                  박성준 · 최지은<span className="text-3xl">의 장남</span> 철수
                </span>
              </p>
              <p aria-label="박성준 최지은의 장녀 영희">
                <span aria-hidden>
                  박성준 · 최지은<span className="text-3xl">의 장녀</span> 영희
                </span>
              </p>
            </>
          }
          sectionBackgroundImage="/wedding/lsh-0239.webp"
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
              name: "박성준",
              phoneNumber: "010-1234-5678",
              highlightColor: "#4ec0ef",
            },
            {
              title: "어머니",
              name: "최지은",
              phoneNumber: "010-1234-5678",
              highlightColor: "#4ec0ef",
            },
          ]}
          rightFamilyContacts={[
            {
              title: "아버지",
              name: "박성준",
              phoneNumber: "010-1234-5678",
              highlightColor: "#F9A8D4",
            },
            {
              title: "어머니",
              name: "최지은",
              phoneNumber: "010-1234-5678",
              highlightColor: "#F9A8D4",
            },
          ]}
        />

        <CalendarSection eventDate={eventDate} />
        <GallerySection
          images={[
            { src: "/wedding/lsh-0050.webp", alt: "소파에 앉아있는 장면" },
            { src: "/wedding/lsh-0239.webp", alt: "야외 촬영" },
            { src: "/wedding/lsh-0844.webp", alt: "야외 스탠딩 촬영" },
            { src: "/wedding/lsh-1056.webp", alt: "실내 스탠딩 촬영" },
            { src: "/wedding/lsh-1102.webp", alt: "서로 바라보는 장면" },
          ]}
        />

        {/*
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
        */}

        <SendMoneySection />

        <LocationSection
          locationTitle="상록아트홀 로비층 그랜드볼륨홀"
          locationAddress="서울 강남구 언주로 508 상록회관 5층"
          locationTel="02-564-5757"
          mapImageUrl="/map.webp"
          tmapUrl="https://tmap.life/bae81b37"
          kakaoMapUrl="https://place.map.kakao.com/2009675378"
          naverMapUrl="https://naver.me/FHYuAgm6"
          kakaoNaviUrl="https://place.map.kakao.com/2009675378"
        />
      </div>
    </main>
  );
}
