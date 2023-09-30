import { InputProps } from "../utils/declareType/type"; //here typescript declerataion in separate folder

const Input = ({
  name,
  placeholder,
  prefix,
  value,
  onChange,
 
  height ,
  width
}: InputProps) => {
  return (
    <div className={` flex h-[${height}] w-[${width}] items-center px-5 border-2 border-bermuda rounded-lg mt-[31px]`} >
       {prefix && (
        <div className="">
          {prefix}
        </div>
      )}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={'w-[90%] h-full focus:outline-none'}
      />
     
    </div>
  );
};

export default Input;
