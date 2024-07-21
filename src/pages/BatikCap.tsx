import { FunctionComponent } from "react";
import HomeLayout from "../components/HomeLayout";
import Products from "../components/BatikCapContent";
import Footer from "../components/Footer";

const BatikCap: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="w-[1600px] bg-seashell flex flex-col items-start justify-start pt-[37px] pb-14 px-0 box-border gap-[130px] max-w-full lg:pt-5 lg:pb-[23px] lg:box-border mq450:gap-[32px] mq825:gap-[65px] mq825:pb-5 mq825:box-border mq1400:pt-6 mq1400:pb-9 mq1400:box-border">
        <div className="self-stretch h-[2624px] relative bg-seashell hidden" />
        <HomeLayout title="Batik Cap"/>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[154px] pr-5 pl-[21px] box-border max-w-full mq825:pb-[65px] mq825:box-border mq1400:pb-[100px] mq1400:box-border">
          <Products />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default BatikCap;
