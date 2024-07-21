import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  download21?: string;
  batikMotifBurung?: string;
  euro?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  download21,
  batikMotifBurung,
  euro,
  propWidth,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`h-[451px] w-[369px] flex flex-col items-start justify-start gap-[14.5px] max-w-full text-left text-xl text-gray font-kopub-batang ${className}`}
      style={frameDivStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={download21}
      />
      <div className="relative z-[1] mq450:text-base">{batikMotifBurung}</div>
      <div className="flex flex-row items-start justify-start py-0 px-px text-lg text-dimgray font-carme">
        <div className="relative inline-block min-w-[70px] z-[1]">{euro}</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
