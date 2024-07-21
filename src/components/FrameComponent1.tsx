import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  photo202305201526411?: string;
  batikBunga?: string;
  euro?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  photo202305201526411,
  batikBunga,
  euro,
  propHeight,
  propWidth,
  propAlignSelf,
  propFlex,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propWidth, propAlignSelf, propFlex]);

  return (
    <div
      className={`h-[451px] w-[374px] flex flex-col items-start justify-start gap-[14.5px] max-w-full text-left text-xl text-gray font-kopub-batang ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={photo202305201526411}
      />
      <div className="flex flex-row items-start justify-start py-0 px-[5px]">
        <div className="relative z-[1] mq450:text-base">{batikBunga}</div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-1.5 text-lg text-dimgray font-carme">
        <div className="relative inline-block min-w-[70px] z-[1]">{euro}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
