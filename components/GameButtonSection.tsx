import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function GameButtonSection() {
    // 화려한 그레디언트의 청첩장 게임 버튼
    return (
        <section
            className="flex justify-center items-center w-full flex-col font-bold text-4xl text-center color-[#483A33] gap-[12.5rem] mt-12"
            aria-label="청첩장 게임 버튼"
        >
            <div className="flex flex-col gap-6 overflow-hidden w-full cursor-pointer">
                <Link href="/game" target="_blank">
                    <div className="relative w-full h-[5rem]">
                        <button
                            className="w-full h-full rounded-lg bg-gradient-to-br from-[#F9A8D4] via-[#F9A8D4] to-[#F9A8D4] text-white font-bold animate-pulse shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative gap-2"
                            aria-label="청첩장 게임 버튼"
                        >
                            <div className="transform w-12 h-12 bg-pink-200 rounded-full animate-bounce flex items-center justify-center">
                                <span role="img" aria-label="게임 캐릭터">
                                    🎮
                                </span>
                            </div>
                            <span className="relative z-10">
                                <Typewriter
                                    options={{
                                        strings: ["청첩장 게임 시작하기", "로딩이 길 수 있으니 조금만 기다려주세요"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 70,
                                    }}
                                />
                            </span>
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    );
}
