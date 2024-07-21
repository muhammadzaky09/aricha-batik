import { FunctionComponent } from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import HomeLayout from "../components/HomeLayout";
import Footer from "../components/Footer";

const MainPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="w-full max-w-[1600px] bg-seashell flex flex-col items-center justify-start pt-[37px] pb-14 px-0 box-border gap-[130px] mx-auto lg:pt-5 lg:pb-[23px] lg:box-border mq450:gap-[32px] mq825:gap-[65px] mq825:pb-5 mq825:box-border mq1400:pt-6 mq1400:pb-9 mq1400:box-border">
        <HomeLayout title="Batik Khas Gulurejo" className="w-full" />
        <div className="w-full px-4 max-w-[1400px]">
          <CategoriesContainer />
        </div>
        <section className="w-full flex flex-col items-center justify-start pt-[30px] px-4 pb-[60px] box-border gap-[40px] max-w-[1400px] text-left text-4xl sm:text-3xl text-gray font-kopub-batang">
          <h1 className="m-0 w-full text-[41px] font-light font-inherit text-center mb-8 sm:text-3xl">
            Galeri Batik Senok
          </h1>
          <div className="w-full max-w-[1200px] grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                  alt={`Batik image ${index + 1}`}
                  src={`/mask-group-${index + 1}@2x.png`}
                />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;