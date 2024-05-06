import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./GallerySection.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export interface GallerySectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-bold text-5xl text-center color-[#483A33] mb-[5rem] mt-24"
      aria-label="결혼식 사진첩"
    >
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
        <p aria-hidden>Gallery</p>
      </div>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        animateThumb={true}
        pager={false}
        thumbnail={true}
        elementClassNames={
          "w-full grid grid-cols-3 gap-2 p-8 *:max-h-[24rem] *:overflow-hidden [&>a>img]:object-cover [&>a>img]:h-full [&>a>img]:w-full"
        }
      >
        {images.map((image, index) => (
          <a key={index} href={image.src} className="gallery__item">
            <img alt={image.alt} src={image.src} />
          </a>
        ))}
      </LightGallery>

      <p className="text-3xl text-[#4A3C35] mt-4">
        이미지를 터치해서 크게 보실 수 있습니다.
      </p>
    </section>
  );
}
