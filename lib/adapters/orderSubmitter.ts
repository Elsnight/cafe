import type { OrderSubmitter } from "./contracts";

function isProbablyMobileUserAgent(ua: string): boolean {
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
}

export function createWhatsAppUrl(args: { phoneE164: string; message: string }): string {
  const phoneDigits = args.phoneE164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(args.message);
  return `https://wa.me/${phoneDigits}?text=${text}`;
}

export function createWhatsAppWebUrl(args: { phoneE164: string; message: string }): string {
  const phoneDigits = args.phoneE164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(args.message);
  return `https://web.whatsapp.com/send?phone=${phoneDigits}&text=${text}`;
}

export type WhatsAppOrderPayload = { message: string };

export function createWhatsAppOrderSubmitter(args: {
  phoneE164: string;
  openTarget?: "_blank" | "_self";
}): OrderSubmitter<WhatsAppOrderPayload> {
  return {
    submit(payload) {
      if (typeof window === "undefined") return;
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isMobile = isProbablyMobileUserAgent(ua);
      const url = isMobile
        ? createWhatsAppUrl({ phoneE164: args.phoneE164, message: payload.message })
        : createWhatsAppWebUrl({ phoneE164: args.phoneE164, message: payload.message });
      const target = args.openTarget ?? "_blank";

      if (target === "_self") {
        window.location.assign(url);
        return;
      }

      const opened = window.open(url, target, "noopener,noreferrer");
      if (!opened) window.location.assign(url);
    },
  };
}

