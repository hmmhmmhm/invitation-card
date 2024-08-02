import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./GallerySection.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";

import React, { useEffect, useState } from "react";

export interface GallerySectionProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export default function GallerySection({ images }: GallerySectionProps) {
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.key === "F12") || // F12
                (e.key === "PrintScreen") || // PrintScreen
                (e.key === "Snapshot") // Windows + Shift + S shortcut
            ) {
                e.preventDefault();
                setOverlayActive(true);
                setTimeout(() => setOverlayActive(false), 3000); // 3초 후 오버레이 비활성화
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                setOverlayActive(true);
                setTimeout(() => setOverlayActive(false), 3000); // 3초 후 오버레이 비활성화
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <>
            <div className={`overlay ${overlayActive ? "active" : ""}`}></div>
            <section
                className={`flex justify-center items-center w-full flex-col font-bold text-5xl text-center color-[#483A33] mb-[5rem] mt-24 no-select ${overlayActive ? "blur-content" : ""}`}
                aria-label="결혼식 사진첩"
            >
                <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
                    <p aria-hidden>Gallery</p>
                </div>

                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail]}
                    animateThumb={true}
                    pager={false}
                    thumbnail={true}
                    download={false} // 다운로드 버튼 비활성화
                    elementClassNames={
                        "w-full grid grid-cols-3 gap-2 p-8 *:max-h-[24rem] *:overflow-hidden [&>a>img]:object-cover [&>a>img]:h-full [&>a>img]:w-full"
                    }
                >
                    {images.map((image, index) => (
                        <a key={index} href={image.src} className="gallery__item relative">
                            <img alt={image.alt} src={image.src} />
                            <div className="absolute inset-0 bg-transparent" style={{ pointerEvents: 'none' }}></div>
                        </a>
                    ))}
                </LightGallery>

                <p className="text-3xl text-[#4A3C35] mt-4">
                    이미지를 터치해서 크게 보실 수 있습니다.
                </p>
            </section>
        </>
    );
}
