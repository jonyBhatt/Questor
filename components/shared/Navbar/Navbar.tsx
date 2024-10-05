import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { Desktop } from "./Desktop";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <nav className="py-6 shadow-md  dark:shadow-secondary">
      <div className="container mx-auto flex justify-between items-center gap-8 px-4 md:px-0">
        {/** Logo */}
        <div className="flex items-start gap-1 ">
          <Image src={Logo} alt="logo" className="w-auto" />
          <h3 className="font-gm font-extrabold text-xl">Questor</h3>
        </div>
        {/** Desktop Nav */}
        <Desktop />
        {/** Mobile Nav */}
        <Mobilenav />
      </div>
    </nav>
  );
};
