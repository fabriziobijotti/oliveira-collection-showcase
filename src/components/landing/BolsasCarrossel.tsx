import claras from "@/assets/bolsas-claras-vertical.jpg.asset.json";
import escuras from "@/assets/bolsas-escuras-vertical.jpg.asset.json";
import offwhite from "@/assets/bolsa-offwhite.jpg.asset.json";
import bege from "@/assets/bolsa-bege.jpg.asset.json";
import rosa from "@/assets/bolsa-rosa.jpg.asset.json";
import verde from "@/assets/bolsa-verde.jpg.asset.json";
import vermelha from "@/assets/bolsa-vermelha.jpg.asset.json";
import preta from "@/assets/bolsa-preta.jpg.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/** EDITÁVEL: fotos da Mini Bolsa exibidas no carrossel do presentão. */
const fotos = [
  { src: claras.url, alt: "Mini Bolsas nas cores off-white, rosa, bege e verde pistache com fivelas douradas", legenda: "Cores claras" },
  { src: escuras.url, alt: "Mini Bolsas nas cores preta e vermelha com fivelas douradas", legenda: "Cores escuras" },
  { src: offwhite.url, alt: "Mini Bolsa off-white com fivela dourada", legenda: "Off-white" },
  { src: bege.url, alt: "Mini Bolsa bege com fivela dourada", legenda: "Bege" },
  { src: rosa.url, alt: "Mini Bolsa rosa com fivela dourada", legenda: "Rosa" },
  { src: verde.url, alt: "Mini Bolsa verde com fivela dourada", legenda: "Verde" },
  { src: vermelha.url, alt: "Mini Bolsa vermelha com fivela dourada", legenda: "Vermelha" },
  { src: preta.url, alt: "Mini Bolsa preta com fivela dourada", legenda: "Preta" },
];

export function BolsasCarrossel() {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {fotos.map((foto) => (
          <CarouselItem key={foto.legenda}>
            <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/5]">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-card/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary shadow-[var(--shadow-soft)]">
                {foto.legenda}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 border-primary/30 bg-card/90 text-primary hover:bg-card" />
      <CarouselNext className="right-3 border-primary/30 bg-card/90 text-primary hover:bg-card" />
    </Carousel>
  );
}
