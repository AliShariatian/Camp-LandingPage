import { FEATURES } from "@/constants";
import Image from "next/image";
import React, { FC } from "react";

type FeatureItemPropsType = {
   title: string;
   icon: string;
   description: string;
};

const FeatureItem: FC<FeatureItemPropsType> = ({ title, icon, description }): JSX.Element => {
   return (
      <li className="flex w-full flex-1 flex-col items-start">
         <div className="rounded-full bg-green-50 p-4 lg:p-7">
            <Image src={icon} alt="Map" width={28} height={28} />
         </div>
         <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
         <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
      </li>
   );
};

const Features: FC = (): JSX.Element => {
   return (
      <section className="flexCenter bg-feature flex-col overflow-hidden bg-center bg-no-repeat py-24">
         <div className="max-container padding-container relative flex w-full justify-end">
            <div className="flex flex-1 lg:min-h-[900px]">
               <Image src="/img/phone.png" alt="Phone" width={440} height={1000} className="feature-phone" />
            </div>

            <div className="z-20 flex w-full flex-col lg:w-[60%]">
               <div className="relative">
                  <Image src="/img/camp.svg" alt="Camp" width={50} height={50} className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
                  <h2 className="bold-40 lg:bold-64">Our Features</h2>
               </div>
               <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
                  {FEATURES.map((item) => (
                     <FeatureItem key={item.title} title={item.title} icon={item.icon} description={item.description} />
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Features;
