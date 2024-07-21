import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={`w-full max-w-[1393px] mx-auto px-4 flex flex-col items-center justify-start gap-[76px] ${className}`}>
      <h1 className="m-0 w-full text-center text-41xl text-gray font-light font-kopub-batang mq450:text-17xl mq825:text-29xl">
        Ragam Batik Kombinasi khas Gulurejo
      </h1>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 auto-rows-fr">
        <FrameComponent2
          download21="/download-2-1@2x.png"
          batikMotifBurung="Batik Motif Burung"
          euro="45 Euro"
          className="aspect-square"
        />
        <FrameComponent2
          download21="/may-bouquet---dark-moody-floral-still-life-photo---photo-art--patinatur-studio-1@2x.png"
          batikMotifBurung="Batik Abstrak Kontemporer"
          euro="60 Euro"
          className="aspect-square"
        />
        <FrameComponent2
          download21="/download-2-1-1@2x.png"
          batikMotifBurung="Whispering Meadows"
          euro="45 Euro"
          className="aspect-square"
        />
        <FrameComponent1
          photo202305201526411="/photo-20230520-152641-1@2x.png"
          batikBunga="Batik Bunga"
          euro="65 Euro"
          className="aspect-square"
        />
        <FrameComponent 
          terraBellaFlowers31="/terra-bella-flowers-3-1@2x.png"
          className="aspect-square"
        />
        <FrameComponent1
          photo202305201526411="/photo-20230520-152641-1-1@2x.png"
          batikBunga="Springtime Serenade"
          euro="65 Euro"
          className="aspect-square"
        />
        <FrameComponent1
          photo202305201526411="/photo-20230520-152641-1-2@2x.png"
          batikBunga="Batik Bunga"
          euro="65 Euro"
          className="aspect-square"
        />
        <FrameComponent 
          terraBellaFlowers31="/terra-bella-flowers-3-1-1@2x.png"
          className="aspect-square"
        />
        <FrameComponent1
          photo202305201526411="/photo-20230520-152641-1-3@2x.png"
          batikBunga="Springtime Serenade"
          euro="65 Euro"
          className="aspect-square"
        />
      </div>
    </section>
  );
};

export default Content;