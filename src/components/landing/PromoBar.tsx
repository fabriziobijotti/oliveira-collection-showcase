import { Gift } from "lucide-react";
import { promoConfig, trackConversion } from "@/config/site";

/** Faixa fina promocional acima do cabeçalho. */
export function PromoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-2 text-center md:px-8">
        <Gift size={15} strokeWidth={1.5} aria-hidden className="hidden shrink-0 sm:block" />
        <p className="text-[11px] leading-snug tracking-wide sm:text-xs">{promoConfig.banner}</p>
        <a
          href="#colecao"
          onClick={() => trackConversion("promo_banner_ver_colecao")}
          className="shrink-0 rounded-full border border-primary-foreground/40 px-3 py-1 text-[11px] tracking-wide transition-colors hover:bg-primary-foreground/15"
        >
          {promoConfig.bannerCta}
        </a>
      </div>
    </div>
  );
}
