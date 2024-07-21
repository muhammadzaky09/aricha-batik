import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

export type ProductType = {
  className?: string;
};

const Product: FunctionComponent<ProductType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1393px] flex flex-col items-start justify-start gap-[76px] max-w-full text-center text-41xl text-gray font-kopub-batang mq450:gap-[19px] mq825:gap-[38px] ${className}`}
    >
      <h1 className="m-0 self-stretch h-[72px] relative text-inherit font-light font-inherit inline-block shrink-0 z-[1] mq450:text-17xl mq825:text-29xl">
        Batik Tulis Eksklusif khas Gulurejo
      </h1>
      <div className="w-[431px] h-[451px] flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full">
        <FrameComponent1
          photo202305201526411="/img-0388-1@2x.png"
          batikBunga="Batik Motif Burung"
          euro="45 Euro"
          propHeight="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          propFlex="1"
        />
      </div>
    </div>
  );
};

export default Product;
