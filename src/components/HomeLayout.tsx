import React, { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export type FrameComponent3Type = {
  className?: string;
  title: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  title,
}) => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='seventhSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    switch (key) {
      case 'batik-kombinasi':
        navigate('/batik-kombinasi');
        break;
      case 'batik-cap':
        navigate('/batik-cap');
        break;
      case 'batik-tulis':
        navigate('/batik-tulis');
        break;
    }
  }, [navigate]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="batik-kombinasi">Batik Kombinasi</Menu.Item>
      <Menu.Item key="batik-cap">Batik Cap</Menu.Item>
      <Menu.Item key="batik-tulis">Batik Tulis</Menu.Item>
    </Menu>
  );

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-center text-51xl text-white font-kopub-batang mq450:gap-[20px] ${className}`}
    >
      <header className="w-full flex flex-row items-center justify-between py-4 px-5 box-border max-w-full text-left text-base text-gray font-shanti bg-[#F8F3EC]">
        <div 
          className="relative text-2xl tracking-[0.13em] uppercase font-kopub-batang whitespace-nowrap z-[1] text-black cursor-pointer"
          onClick={onHomeClick}
        >
          Aricha Batik
        </div>
        <nav className="flex flex-row items-center gap-8">
          <Dropdown overlay={menu} trigger={['hover']}>
            <a className="ant-dropdown-link [text-decoration:none] text-[inherit] cursor-pointer" onClick={e => e.preventDefault()}>
              Kategori <DownOutlined />
            </a>
          </Dropdown>
          <a
            className="[text-decoration:none] relative text-[inherit] cursor-pointer z-[1]"
            onClick={onContactsTextClick}
          >
            Contacts
          </a>
        </nav>
      </header>
      <div className="self-stretch flex flex-row items-start justify-center py-[255px] pr-5 pl-[21px] box-border relative bg-[url('/public/photoheader-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[573px] max-w-full z-[1] mq825:pt-[166px] mq825:pb-[166px] mq825:box-border">
        <img
          className="h-[573px] w-[1600px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/photoheader-1-1@2x.png"
        />
        <img
          className="h-[565px] w-[587px] relative object-cover hidden max-w-full z-[1]"
          alt=""
          src="/photoheader-1@2x.png"
        />
        <h1 className="m-0 h-[38.1px] w-[995px] relative text-inherit font-normal font-inherit inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[2] mq450:text-23xl mq825:text-37xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent3;