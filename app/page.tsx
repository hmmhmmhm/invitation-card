"use client";

import IntroSection from "@/components/IntroSection";
import InvitationSection from "@/components/InvitationSection";
import WeddingPhotoSection from "@/components/WeddingPhotoSection";
import { cn } from "@/lib/cn";
import { useSakuraEffect } from "@/lib/hook/use-sakura-effect";
import dynamic from "next/dynamic";
import { forceUtc, utcMsOfKorea } from "@/lib/time";
import GameButtonSection from "@/components/GameButtonSection";
import SendMoneySection from "@/components/SendMoneySection";
import CommentSection from "@/components/CommentSection";
import { useSearchParams } from "next/navigation";
// import ContactSection from "@/components/ContactSection";
// import MovieSection from "@/components/MovieSection";
import LocationSection from "@/components/LocationSection";
import Link from "next/link";

const CalendarSection = dynamic(() => import("@/components/CalendarSection"), {
  ssr: false,
});
const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false,
});

export default function Home() {
  const searchParams = useSearchParams();
  const nogaejwa = searchParams.get("noaccount");

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
          src="/wedding/006.webp"
          alt=""
          onClick={() => {
            (
              document.querySelector(
                'a[href="/wedding/006.webp"]'
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

        <LocationSection
          locationTitle="상록아트홀 L층 그랜드볼룸"
          locationAddress="서울 강남구 언주로 508"
          mapImageUrl="/map.webp"
          tmapUrl="https://tmap.life/bae81b37"
          kakaoMapUrl="https://place.map.kakao.com/2009675378"
          naverMapUrl="https://naver.me/FHYuAgm6"
          kakaoNaviUrl="https://place.map.kakao.com/2009675378"
          /*transportationInfo={{
            address: "서울특별시 강남구 언주로 508 (역삼동 701번지)",
            phone: "02-564-5757",
            subway: "“선릉역” 5번 출구 도보 5분",
            shuttleBus: "선릉역 5번 출구에서 운행",
            bus: [
              "KT 강남지사 하차: 141(도봉산), 242(중랑, 신내역), 361(여의도)",
              "한국기술센터, 상록회관 하차: 146(상계동), 341(하남), 360(송파), 740(덕은동)",
            ],
            car: "“서울상록회관” 또는 “서울시 강남구 언주로 508” 입력",
            parking: "동시 950대 주차 가능",
          }*/
        />
        <div className="flex w-full justify-center -mt-32 mb-40">
          <Link
            href="/hotel-direction.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-6 py-3 bg-[#F78DA7] text-white text-2xl rounded-lg"
              aria-label="예식장 약도 보기 PDF"
            >
              예식장 약도 보기 PDF
            </button>
          </Link>
        </div>

        <CalendarSection eventDate={eventDate} />

        <GallerySection
          images={[
                     
                      { src: "/wedding/011.webp", alt: "" },
                      { src: "/wedding/019.webp", alt: "" },
                      { src: "/wedding/009.webp", alt: "" },
                      { src: "/wedding/001.webp", alt: "" },
                      { src: "/wedding/016.webp", alt: "" },
                      { src: "/wedding/012.webp", alt: "" },
                      { src: "/wedding/010.webp", alt: "" },
                      { src: "/wedding/022.webp", alt: "" },
                      { src: "/wedding/020.webp", alt: "" },
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

        {nogaejwa === null && (
          <SendMoneySection
            accounts={[
              {
                prefix: "신랑",
                bankName: "카카오뱅크",
                accountNumber: "79420421509",
                name: "박성준",
                color: "#B7D06E",
              },
              {
                prefix: "신랑측",
                bankName: "하나은행",
                accountNumber: "31118079747",
                name: "박원식",
                color: "#B7D06E",
              },
              {
                prefix: "신부",
                bankName: "카카오뱅크",
                accountNumber: "79420435823",
                name: "최지은",
                color: "#f9a8d4",
              },
              {
                prefix: "신부측",
                bankName: "하나은행",
                accountNumber: "35791063194107",
                name: "최병옥",
                color: "#f9a8d4",
              }
            ]}
          />
        )}
      </div>
    </main>
  );
}
