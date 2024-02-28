import { FC } from "react";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <Hero />
         <Camp />
         <Guide />
         <Features />
         <GetApp />
      </>
   );
};

export default HomePage;
