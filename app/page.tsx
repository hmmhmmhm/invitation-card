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
// import LocationSection from "@/components/LocationSection";
import GameButtonSection from "@/components/GameButtonSection";
import SendMoneySection from "@/components/SendMoneySection";
import CommentSection from "@/components/CommentSection";

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
        "bg-gradient-to-br from-[#fff5e5] via-[#fde2e4] to-[#e2ece9] pb-40"
      )}
      aria-label="박성준 최지은 결혼식 청첩장"
    >
      <div className="w-full max-w-[720px]">
        <IntroSection eventDate={eventDate} names={["박성준", "최지은"]} />

        <WeddingPhotoSection
          src="/wedding/lsh-0239.webp"
          alt=""
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
              서로의 꿈을 응원해 온 두 사람이
              <br />
              이제 하나의 길을 함께 걸어가려 합니다.
              <br />
              <br />
              앞으로의 모든 날들을 더 아름답게 만들어가고, <br />
              서로에게 힘이 되는 든든한 반려자가 되겠습니다. <br />
              새롭게 시작하는 이 소중한 자리에서 <br />
              함께 축복해 주시기를 바랍니다. <br />
            </>
          }
          familyNames={
            <>
              <p aria-label="박원식 황순용의 차남 성준">
                <span aria-hidden>
                  박원식 · 황순용<span className="text-3xl">의 차남</span> 성준
                </span>
              </p>
              <p aria-label="최병옥 손원미의 차녀 지은">
                <span aria-hidden>
                  최병옥 · 손원미<span className="text-3xl">의 차녀</span> 지은
                </span>
              </p>
            </>
          }
          sectionBackgroundImage="/wedding/lsh-0239.webp"
        />

        <CalendarSection eventDate={eventDate} />

        <GallerySection
          images={[
            { src: "/wedding/lsh-0050.webp", alt: "" },
            { src: "/wedding/lsh-0239.webp", alt: "" },
            { src: "/wedding/lsh-0844.webp", alt: "" },
            { src: "/wedding/lsh-1056.webp", alt: "" },
            { src: "/wedding/lsh-1102.webp", alt: "" },
          ]}
        />

        <CalendarSection eventDate={eventDate} />

        <GallerySection
          images={[
            { src: "/wedding/lsh-0050.webp", alt: "" },
            { src: "/wedding/lsh-0239.webp", alt: "" },
            { src: "/wedding/lsh-0844.webp", alt: "" },
            { src: "/wedding/lsh-1056.webp", alt: "" },
            { src: "/wedding/lsh-1102.webp", alt: "" },
          ]}
        />

        {/*
        {<MovieSection description="두 사람의 아름다운 시작을 함께 해주세요.">
          <iframe
            src="https://www.youtube.com/embed/mb2j87IDeTI"
            title="4년 공개연애 끝, 행복했던 우리의 결혼식"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="border-none w-full min-h-[40rem]"
          />
        </MovieSection>
        }
        */}

        {/*
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
        */}

        <CommentSection />
        <SendMoneySection
          accounts={[
            {
              prefix: "신랑",
              bankName: "카카오뱅크",
              accountNumber: "3333-10-4286822",
              name: "박성준",
              color: "#4ec0ef",
            },
            {
              prefix: "신랑 혼주",
              bankName: "카카오뱅크",
              accountNumber: "3333-10-4286822",
              name: "박성준",
              color: "#4ec0ef",
            },
            {
              prefix: "신부",
              bankName: "우리은행",
              accountNumber: "1234-5678-9012-3456",
              name: "최지은",
              color: "#f9a8d4",
            },
            {
              prefix: "신부 혼주",
              bankName: "카카오뱅크",
              accountNumber: "3333-10-4286822",
              name: "박성준",
              color: "#f9a8d4",
            },
          ]}
        />
      </div>
    </main>
  );
}
