import Text from "../CustomText/custom.component";

import { ButtonProps } from "../utils/declareType/type";

 

const Button = ({ children, fontSize, onClick, type }: ButtonProps) => {

  const bg = () => {

    switch (type) {

      case "primary":

        return "bg-btnColor hover:bg-bermuda";

      case "secondary":

        return "bg-white border-btnColor border-2  hover:bg-btnColor ";

      case "link":

        return "underline text-tahiti cursor-pointer";

    }

  };

  return (

    <div

      className={

        type === "link"

          ? bg()

          : `${bg()}  rounded-[6px] py-[18px] px-[30px] items-center flex justify-center shadow-[1px 1px 4px rgba(0, 0, 0, 0.25)]  cursor-pointer`

      }

      onClick={() => onClick}

    >

      <Text

        text={children}

        className={` text-[${fontSize}] ${

          type === "primary" ? "text-white" : "text-tahiti"

        } font-[700] font-Istok Web`}

        textType="p"

      />

    </div>

  );

};

 

export default Button;