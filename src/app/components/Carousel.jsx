import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import fidson from "../../../public/assets/fidson.svg";
import sanofi from "../../../public/assets/sanofi.svg";
import pg from "../../../public/assets/pg.svg";
import pwc from "../../../public/assets/pwc.svg";
import sygen from "../../../public/assets/sygen.svg";
import merk from "../../../public/assets/merk.png";

export default function Slider() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="px-3 py-10 my-20 shadow-lg shadow-[#0224cf3d]">
      <div>
        <h1 className="font-work text-2xl m-10 font-bold">
        Trusted by major companies in life sciences
        </h1>
      </div>
      <Carousel
        height="auto"
        slideSize="10%"
        loop
        slideGap="md"
        align="center"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Image src={fidson} alt="fidson" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sanofi} alt="sanofi" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={merk} alt="merk" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pg} alt="pg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sygen} alt="sygen" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pwc} alt="pwc" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={fidson} alt="fidson" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sanofi} alt="sanofi" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={merk} alt="merk" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pg} alt="pg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sygen} alt="sygen" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pwc} alt="pwc" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={fidson} alt="fidson" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sanofi} alt="sanofi" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={merk} alt="merk" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pg} alt="pg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sygen} alt="sygen" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={pwc} alt="pwc" />
        </Carousel.Slide>

        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
