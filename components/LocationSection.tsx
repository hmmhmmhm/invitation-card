import { cn } from "@/lib/cn";
import { IconPhoneCall } from "@tabler/icons-react";

export default function LocationSection() {
  return (
    <section
      className={cn(
        "flex justify-center items-center w-full flex-col font-normal text-center text-[#483A33] my-40"
      )}
      aria-label="결혼식 장소 및 연락처 안내"
    >
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem] mb-16">
        <p aria-hidden>Location</p>
      </div>

      <div className="flex flex-row w-full justify-between items-center p-12 bg-[#FBE2E4] text-[#665743]">
        <div className="flex flex-col text-[2.5rem] text-left">
          <p
            className="mb-4 text-5xl text-balance font-bold"
            aria-label="잇츠카드 웨딩홀 6층 노블레스홀"
          >
            잇츠카드 웨딩홀 6층 노블레스홀
          </p>
          <p aria-label="서울특별시 강남구 논현로 742">
            서울특별시 강남구 논현로 742
          </p>
          <p aria-label="Tel. 02-1234-5678">Tel. 02-1234-5678</p>
        </div>
        <div>
          <button
            type="button"
            className="flex justify-center items-center gap-2 w-36 h-36 bg-[#6EBD52] rounded-full shadow-lg"
            style={{ backgroundColor: "#F9A8D4" }}
          >
            <IconPhoneCall
              size="5rem"
              stroke={1.5}
              color="transparent"
              fill="white"
              aria-label="예식장에 전화하기"
            />
          </button>
        </div>
      </div>

      <img
        src="/map.png"
        className="w-full object-cover"
        aria-label="예식장 지도"
      />

      <div
        className="flex flex-row w-full justify-between items-center p-12 bg-[#FBE2E4] text-[#665743] text-4xl font-bold"
        aria-label="길찾기 앱으로 길찾기"
      >
        <button
          className="w-full flex flex-col justify-center items-center gap-8"
          aria-label="티맵으로 길찾기"
        >
          <div
            className="w-36 h-36 rounded-full bg-slate-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/icons/tmap.svg)`,
            }}
          />
          <p>티맵</p>
        </button>
        <button
          className="w-full flex flex-col justify-center items-center gap-8"
          aria-label="카카오내비로 길찾기"
        >
          <div
            className="w-36 h-36 rounded-full bg-slate-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/icons/kakao-navi.svg)`,
            }}
          />
          <p>카카오내비</p>
        </button>
        <button
          className="w-full flex flex-col justify-center items-center gap-8"
          aria-label="네이버지도로 길찾기"
        >
          <div
            className="w-36 h-36 rounded-full bg-slate-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/icons/naver-map.jpg)`,
            }}
          />
          <p>네이버지도</p>
        </button>
        <button
          className="w-full flex flex-col justify-center items-center gap-8"
          aria-label="카카오맵으로 길찾기"
        >
          <div
            className="w-36 h-36 rounded-full bg-slate-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/icons/kakao-map.png)`,
            }}
          />
          <p>카카오맵</p>
        </button>
      </div>
    </section>
  );
}
