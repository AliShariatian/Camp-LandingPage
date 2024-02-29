import Image from "next/image";
import { FC } from "react";
import Button from "./Button";

const Hero: FC = (): JSX.Element => {
   return (
      <section className="max-container padding-container flex flex-col gap-20 pb-32 pt-10 md:gap-28 lg:py-20 xl:flex-row">
         <div className="hero-map" />

         {/* LEFT SIDE */}
         <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image src="/img/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]" />

            <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
               We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure
               around the world in just one app
            </p>

            {/* Rate */}
            <div className="my-11 flex flex-wrap gap-5">
               <div className="flex items-center gap-2">
                  {Array(5)
                     .fill(1)
                     .map((_, index) => (
                        <Image key={index} src="/img/star.svg" alt="star" width={24} height={24} />
                     ))}
               </div>

               <p className="bold-16 lg:bold-20 text-blue-70">
                  198K <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
               </p>
            </div>

            <div className="flex w-full flex-col gap-5 sm:flex-row">
               <Button type="button" title="Download App" variant="btn_green" />
               <Button type="button" title="How we work?" variant="btn_white_text" icon="/img/play.svg" />
            </div>
         </div>

         {/* Card */}
         <div className="relative mt-5 flex flex-1 items-start lg:mt-0 xl:mr-16">
            <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
               <div className="flex flex-col">
                  <div className="flexBetween">
                     <span className="regular-16 text-gray-20">Location</span>
                     <Image src="/img/close.svg" alt="close" width={24} height={24} />
                  </div>
                  <p className="bold-20 text-white">Aguas Calientes</p>
               </div>

               <div className="flexBetween">
                  <div className="flex flex-col">
                     <span className="regular-16 block text-gray-20">Distance</span>
                     <span className="bold-20 text-white">173.28 mi</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="regular-16 block text-gray-20">Elevation</span>
                     <span className="bold-20 text-white">2.040 km</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
