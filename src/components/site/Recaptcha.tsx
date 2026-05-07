import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (t: string) => void; "expired-callback"?: () => void }) => number;
      reset: (id?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

const SITE_KEY = "6LfXRt0sAAAAAGrBtHT_YXD2r_AWYai6IzdSbLlo";

let scriptLoaded = false;
const loaders: Array<() => void> = [];

function ensureScript(cb: () => void) {
  if (typeof window === "undefined") return;
  if (window.grecaptcha?.render) {
    cb();
    return;
  }
  loaders.push(cb);
  if (scriptLoaded) return;
  scriptLoaded = true;
  window.onRecaptchaLoad = () => {
    loaders.splice(0).forEach((fn) => fn());
  };
  const s = document.createElement("script");
  s.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export function Recaptcha({
  onChange,
}: {
  onChange: (token: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    ensureScript(() => {
      if (!containerRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = window.grecaptcha!.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (t) => onChange(t),
        "expired-callback": () => onChange(null),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="flex justify-center" />;
}