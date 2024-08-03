import { cn } from "@/lib/cn";
import Link from "next/link";

export interface LocationSectionProps {
  locationTitle: string;
  locationAddress: string;
  mapImageUrl: string;
  tmapUrl?: string;
  kakaoNaviUrl?: string;
  naverMapUrl: string;
  kakaoMapUrl?: string;
}

export default function LocationSection({
  locationTitle,
  locationAddress,
  locationTel,
  mapImageUrl,
  tmapUrl,
  kakaoNaviUrl,
  naverMapUrl,
  kakaoMapUrl,
}: LocationSectionProps) {
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

      <div className="flex flex-row w-full justify-between items-center p-12 text-[#665743]">
        <div className="flex flex-col text-[2.5rem] text-left">
          <p
            className="mb-4 text-5xl text-balance font-bold"
            aria-label={locationTitle}
          >
            {locationTitle}
          </p>
          <p aria-label={locationAddress}>{locationAddress}</p>
        </div>
        <div></div>
      </div>

      <Link href={naverMapUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={mapImageUrl}
          className="w-full object-cover sm:rounded-2xl"
          aria-label="예식장 지도"
        />
      </Link>

      <div
        className="flex flex-row w-full justify-between items-center p-12 text-[#665743] text-4xl font-bold"
        aria-label="길찾기 앱으로 길찾기"
      >
        {tmapUrl && (
          <Link href={tmapUrl} target="_blank" rel="noopener noreferrer">
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
          </Link>
        )}
        {kakaoNaviUrl && (
          <Link href={kakaoNaviUrl} target="_blank" rel="noopener noreferrer">
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
          </Link>
        )}
        {naverMapUrl && (
          <Link href={naverMapUrl} target="_blank" rel="noopener noreferrer">
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
          </Link>
        )}
        {kakaoMapUrl && (
          <Link href={kakaoMapUrl} target="_blank" rel="noopener noreferrer">
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
          </Link>
        )}
      </div>

      {/*  <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem] mb-16 justify-center mt-24">
        <p aria-hidden>Transportation</p>
      </div>
      <div className="flex flex-col w-full p-6 bg-[#FBE2E4] text-[#665743]">
        <div className="text-left text-2xl">
          <table className="w-full text-left border-collapse">
            <tbody>
              {transportationInfo?.address && (
                <tr>
                  <td className="font-semibold py-2">주소</td>
                  <td className="py-2">{transportationInfo.address}</td>
                </tr>
              )}
              {transportationInfo?.phone && (
                <tr>
                  <td className="font-semibold py-2">전화</td>
                  <td className="py-2">{transportationInfo.phone}</td>
                </tr>
              )}
              {(transportationInfo?.subway ||
                transportationInfo?.shuttleBus) && (
                <>
                  <tr>
                    <td colSpan={2} className="font-semibold text-3xl py-4">
                      지하철 및 셔틀버스 이용시
                    </td>
                  </tr>
                  {transportationInfo?.subway && (
                    <tr>
                      <td className="py-2">2호선, 수인분당선</td>
                      <td className="py-2">{transportationInfo.subway}</td>
                    </tr>
                  )}
                  {transportationInfo?.shuttleBus && (
                    <tr>
                      <td className="py-2">셔틀버스</td>
                      <td className="py-2">{transportationInfo.shuttleBus}</td>
                    </tr>
                  )}
                </>
              )}
              {transportationInfo?.bus && transportationInfo.bus.length > 0 && (
                <>
                  <tr>
                    <td colSpan={2} className="font-semibold text-3xl py-4">
                      일반 버스 이용시
                    </td>
                  </tr>
                  {transportationInfo.bus.map((busInfo, index) => (
                    <tr key={index}>
                      <td className="py-2">{busInfo.split(":")[0]}</td>
                      <td className="py-2">{busInfo.split(":")[1]}</td>
                    </tr>
                  ))}
                </>
              )}
              {transportationInfo?.car && (
                <>
                  <tr>
                    <td colSpan={2} className="font-semibold text-3xl py-4">
                      자동차 이용시
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">네비게이션</td>
                    <td className="py-2">{transportationInfo.car}</td>
                  </tr>
                </>
              )}
              {transportationInfo?.parking && (
                <>
                  <tr>
                    <td colSpan={2} className="font-semibold text-3xl py-4">
                      주차안내
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">주차 가능</td>
                    <td className="py-2">{transportationInfo.parking}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>*/}
    </section>
  );
}
