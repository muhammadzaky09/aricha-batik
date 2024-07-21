import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const onBatikKombinasiClick = useCallback(() => {
    navigate("/batik-kombinasi");
  }, [navigate]);

  const onBatikTulisClick = useCallback(() => {
    navigate("/batik-tulis");
  }, [navigate]);

  const onBatikCapClick = useCallback(() => {
    navigate("/batik-cap");
  }, [navigate]);

  return (
    <footer
      className="self-stretch flex flex-row items-start justify-start max-w-full z-[1] text-left text-7xl text-gray font-kopub-batang"
      data-scroll-to="seventhSection"
    >
      <div className="flex-1 bg-seashell box-border flex flex-row items-start justify-between pt-[71px] pb-[11px] pr-[198px] pl-[200px] max-w-full gap-[20px] border-t-[1px] border-solid border-antiquewhite mq450:pt-[46px] mq450:px-5 mq450:pb-5 mq450:box-border mq825:pl-[100px] mq825:pr-[99px] mq825:box-border mq1400:flex-wrap mq1400:justify-center">
        <div className="h-[388px] w-[1602px] relative bg-seashell box-border hidden max-w-full border-t-[1px] border-solid border-antiquewhite" />
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <h3 className="m-0 self-stretch h-[33px] relative text-inherit tracking-[0.13em] uppercase font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-2xl">
            Griya batik senok
          </h3>
          <div className="w-[145px] flex flex-row items-center justify-start py-0 px-px box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-[20px]">
              <Link to="https://www.instagram.com/griya_batik_senok/?hl=en" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-5 w-5 relative object-cover min-h-[20px] z-[1] cursor-pointer"
                  loading="lazy"
                  alt="Instagram"
                  src="/instagram-19-1@2x.png"
                />
              </Link>
              <Link to="https://wa.me/6281809538336" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-6 w-6 relative object-cover min-h-[20px] z-[1] cursor-pointer"
                  loading="lazy"
                  alt="WhatsApp"
                  src="/whatsapp.png"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-xl text-black">
            <div className="relative inline-block min-w-[82px] z-[1] mq450:text-base">
              Kategori
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-mid text-gray font-carme">
              <div 
                className="relative inline-block min-w-[124px] z-[1] cursor-pointer hover:underline"
                onClick={onBatikKombinasiClick}
              >
                Batik Kombinasi
              </div>
              <div 
                className="relative inline-block min-w-[79px] z-[1] cursor-pointer hover:underline"
                onClick={onBatikTulisClick}
              >
                Batik Tulis
              </div>
              <div 
                className="relative inline-block min-w-[74px] z-[1] cursor-pointer hover:underline"
                onClick={onBatikCapClick}
              >
                Batik Cap
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[30px] text-xl text-black">
          <div className="self-stretch flex flex-col items-end justify-start gap-[6px]">
            <div className="relative z-[1] mq450:text-base">
              0813 2514 8183
            </div>
            <div className="self-stretch relative text-mid leading-[134.07%] font-carme text-gray text-right z-[1]">
              Jl. Brosot - Ngentakrejo No.184, Wonolopo, Gulurejo, Kec.
              Lendah, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta
              55663
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end text-mid text-gray font-carme">
            <div className="relative whitespace-pre-wrap inline-block min-w-[113px] z-[1]">
              07.00 - 21.00
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;