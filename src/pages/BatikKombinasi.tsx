import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Kategori from "../components/Kategori";
import Content from "../components/BatikKombinasiContent";
import HomeLayout from "../components/HomeLayout";
import Footer from "../components/Footer";

const BatikKombinasi: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='seventhSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="w-[1600px] bg-seashell flex flex-col items-start justify-start pt-[37px] pb-14 px-0 box-border gap-[130px] max-w-full mq450:gap-[32px] mq825:gap-[65px] mq825:pb-5 mq825:box-border mq1400:pt-5 mq1400:pb-[23px] mq1400:box-border">
        <div className="self-stretch h-[2981px] relative bg-seashell hidden" />
       <HomeLayout title="Batik Kombinasi" />
        <Content />
        <Footer/>
      </main>
    </div>
  );
};

export default BatikKombinasi;
