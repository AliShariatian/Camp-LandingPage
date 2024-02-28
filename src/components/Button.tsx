import Image from "next/image";
import { FC } from "react";

type Props = {
   type: "button" | "submit";
   variant: string;
   title: string;
   icon?: string;
};

const Button: FC<Props> = ({ type, title, icon, variant }): JSX.Element => {
   return (
      <button type={type} className={`${variant} flexCenter gap-3 rounded-full`}>
         {icon && <Image src={icon} alt={title} width={24} height={24} />}
         <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
   );
};

export default Button;
