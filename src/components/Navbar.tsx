import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar: FC = (): JSX.Element => {
   return (
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
         <Link href="/">
            <Image src="./img/hilink-logo.svg" alt="Logo" width={74} height={29} />
         </Link>

         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((item) => (
               <li key={item.key}>
                  <Link href={item.href} className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold">
                     {item.label}
                  </Link>
               </li>
            ))}
         </ul>

         <div className="lg:flexCenter hidden">
            <Button title="Login" type="button" icon="/img/user.svg" variant="btn_dark_green" />
         </div>

         <Image src="/img/menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
      </nav>
   );
};

export default Navbar;
