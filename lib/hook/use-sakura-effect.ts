import { useEffect } from "react";

declare global {
  interface Window {
    Sakura: any;
  }
}

export const useSakuraEffect = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !window.Sakura) return;
    new window.Sakura("body");
  }, []);
};
