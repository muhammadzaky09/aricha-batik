import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type CategoriesContainerType = {
  className?: string;
};

const CategoriesContainer: FunctionComponent<CategoriesContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onKombinasiIconClick = useCallback(() => {
    navigate("/batik-kombinasi");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/batik-cap");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/batik-tulis");
  }, [navigate]);

  return (
    <div
      className={`self-stretch bg-seashell flex flex-col items-center justify-start pt-4 px-5 pb-[59px] box-border gap-[40px] max-w-full z-[1] mt-[-20px] text-left text-5xl text-gray font-kopub-batang ${className}`}
    >
      <div className="w-full flex justify-center items-center text-41xl text-gray">
        <h1 className="m-0 text-inherit font-light font-inherit z-[2] mq850:text-29xl mq450:text-17xl">
          Kategori
        </h1>
      </div>
      
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-between gap-[40px] px-5 box-border mq1225:flex-wrap mq1225:justify-center">
        <div
          className="w-[300px] h-[74px] bg-gainsboro flex items-center justify-center cursor-pointer rounded-md transition-transform hover:scale-105"
          onClick={onKombinasiIconClick}
        >
          <h3 className="m-0 text-inherit leading-[137.7%] font-normal font-inherit z-[3]">
            Batik Kombinasi
          </h3>
        </div>
        <div
          className="w-[300px] h-[74px] bg-gainsboro flex items-center justify-center cursor-pointer rounded-md transition-transform hover:scale-105"
          onClick={onRectangleClick}
        >
          <h3 className="m-0 text-inherit leading-[137.7%] font-normal font-inherit z-[3]">
            Batik Cap
          </h3>
        </div>
        <div
          className="w-[300px] h-[74px] bg-gainsboro flex items-center justify-center cursor-pointer rounded-md transition-transform hover:scale-105"
          onClick={onRectangleClick1}
        >
          <h3 className="m-0 text-inherit leading-[137.7%] font-normal font-inherit z-[3]">
            Batik Tulis
          </h3>
        </div>
      </div>
      <div className="w-full max-w-[1400px] h-px relative box-border z-[2] border-t-[1px] border-solid border-black" />
    </div>
  );
};

export default CategoriesContainer;