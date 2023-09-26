import { CustomTextProps } from "../utils/TypeDeclear/type";

const Text = ({text,textType,className}:CustomTextProps) => {
 switch(textType){
  case "h1":
   return  <h1 className={className}>{text}</h1>
   
   case "h2":
    return <h2 className={className}>{text}</h2>
    case "p":
      return <p className={className}>{text}</p>
    default:
      return <p className={className}>{text}</p>
 }

}

export default Text