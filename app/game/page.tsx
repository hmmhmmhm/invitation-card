"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    createUnityInstance: (
      ref: HTMLCanvasElement,
      options: {
        dataUrl: string;
        frameworkUrl: string;
        codeUrl: string;
        streamingAssetsUrl: string;
        companyName: string;
        productName: string;
        productVersion: string;
      }
    ) => void;
  }
}

const UnityWebGLPlayer: React.FC = () => {
  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
      document.head.appendChild(meta);

      const canvas = document.querySelector<HTMLCanvasElement>("#unity-canvas");
      if (canvas) {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "fixed";
      }

      document.body.style.textAlign = "left";
    }

    window.createUnityInstance(document.querySelector("#unity-canvas")!, {
      dataUrl: "build/WeddingMarchBuildTest.data",
      frameworkUrl: "build/WeddingMarchBuildTest.framework.js",
      codeUrl: "build/WeddingMarchBuildTest.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "SuperWedding",
      productVersion: "1.0",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#231f20]">
      <canvas
        id="unity-canvas"
        tabIndex={-1}
        className="w-[320px] h-[320px] sm:w-[640px] sm:h-[640px] md:w-[720px] md:h-[720px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] 2xl:w-[1000px] 2xl:h-[1000px]"
      ></canvas>
    </div>
  );
};

export default UnityWebGLPlayer;
