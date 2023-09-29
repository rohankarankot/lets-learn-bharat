import Text from "../CustomText/custom.component";
import { ButtonProps } from "../utils/declareType/type";

const Button = ({ children, className, txtColor, fontSize,onClick }: ButtonProps) => {
  return (
    <div
      className={`${className} items-center flex justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-bermuda cursor-pointer`}
      onClick={()=>onClick()}
    >
      <Text
        text={children}
        className={`text-${txtColor} text-[${fontSize}] text-center `}
        textType="p"
      />
    </div>
  );
};

export default Button;
