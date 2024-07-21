import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";

export type KategoriType = {
  className?: string;
};

const Kategori: FunctionComponent<KategoriType> = ({ className = "" }) => {
  return (
    <Select
      className={`h-[26px] flex-1 font-shanti text-mini text-gray ${className}`}
    />
  );
};

export default Kategori;
