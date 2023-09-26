import { InputProps } from "../utils/TypeDeclear/type"; //here typescript declerataion in separate folder

const Input = ({
  name,
  placeholder,
  prefix,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className={` flex ${className} items-center`} >
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
