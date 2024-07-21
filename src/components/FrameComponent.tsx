import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  terraBellaFlowers31?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  terraBellaFlowers31,
}) => {
  return (
    <div
      className={`w-[370px] flex flex-col items-start justify-start gap-[14.5px] max-w-full text-left text-xl text-gray font-kopub-batang ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
        <img
          className="h-[378px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={terraBellaFlowers31}
        />
      </div>
      <div className="w-[246px] relative inline-block z-[1] mq450:text-base">
        Batik Motif Tumbuhan
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px text-lg text-dimgray font-carme">
        <div className="relative inline-block min-w-[70.2px] z-[1]">
          50 Euro
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
