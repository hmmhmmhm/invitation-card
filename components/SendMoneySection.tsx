// 축의금 전달 컴포넌트 섹션
import { cn } from "@/lib/cn";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SendMoneySection() {
  const [showAccount, setShowAccount] = useState(false);

  const copyAccountText = ({
    text,
    prefix,
  }: {
    text: string;
    prefix: string;
  }) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${prefix}측 계좌번호가 복사되었습니다!`);
    });
    if (!showAccount) setShowAccount(!showAccount);
  };

  return (
    <section className="flex flex-col items-center w-full space-y-12">
      {/* ACCOUNT */}
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
        <p aria-label="축의금 전달">ACCOUNT</p>
      </div>

      {/* 축하의 마음을 담아 축의금을 전달해보세요 */}
      <div className="text-balance break-keep text-4xl leading-[4rem] !my-12">
        축하의 마음을 담아 축의금을 전달해보세요
      </div>

      {/* 신랑측 마음 - 계좌번호 보기 (버튼) 핑크 */}
      <TinySendMoneyItem
        className="bg-[#4ec0ef]"
        prefix="신랑"
        showAccount={showAccount}
        bankName="국민은행"
        accountNumber="1234-5678-9012-3456"
        name="박성준"
        onClick={() => {
          copyAccountText({
            text: `국민은행 1234-5678-9012-3456 박성준`,
            prefix: "신랑",
          });
        }}
      />

      {/* 신부측 마음 - 계좌번호 보기 (버튼) */}
      <TinySendMoneyItem
        className="bg-[#f9a8d4]"
        prefix="신부"
        showAccount={showAccount}
        bankName="우리은행"
        accountNumber="1234-5678-9012-3456"
        name="최지은"
        onClick={() => {
          copyAccountText({
            text: `우리은행 1234-5678-9012-3456 최지은`,
            prefix: "신부",
          });
        }}
      />
    </section>
  );
}

export const TinySendMoneyItem = ({
  prefix,
  showAccount,
  onClick,

  bankName,
  accountNumber,
  name,
  className,
}: {
  prefix: string;
  showAccount: boolean;
  onClick: () => unknown;

  bankName: string;
  accountNumber: string;
  name: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      <span className="text-5xl mr-4 shrink-0" aria-hidden>
        {prefix}측 마음
      </span>
      <button
        onClick={onClick}
        className={cn(
          "w-full h-full py-4 px-12 rounded-lg text-white font-bold animate-pulse shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative gap-2 text-4xl",
          className
        )}
        aria-label={`${prefix}측 계좌번호`}
      >
        {!showAccount && (
          <div className="transform w-12 h-12 rounded-full animate-bounce flex items-center justify-center">
            <span role="img" aria-label="계좌번호">
              💳
            </span>
          </div>
        )}
        <span className="relative z-10">
          {showAccount ? (
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span role="img" aria-label="은행">
                  🏦
                </span>
                <span>은행: {bankName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="계좌번호">
                  💳
                </span>
                <span>계좌: {accountNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="예금주">
                  👤
                </span>
                <span>성함: {name}</span>
              </div>
            </div>
          ) : (
            "계좌번호 보기"
          )}
        </span>
      </button>
    </div>
  );
};
