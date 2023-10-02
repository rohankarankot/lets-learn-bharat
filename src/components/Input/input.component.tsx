import { InputProps } from "../utils/declareType/type"; //here typescript declerataion in separate folder

export const SearchInput = ({
  name,
  placeholder,
  prefix,
  value,
  onChange,

  height,
  width,
}: InputProps) => {
  return (
    <div
      className={` flex h-[${height}] w-[${width}]  items-center px-5 border-2 border-bermuda rounded-lg `}
    >
      {prefix && <div className="">{prefix}</div>}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={"w-[90%] h-[100%s] focus:outline-none"}
      />
    </div>
  );
};

export const FormInput = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  className,
  prefix,
}: InputProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      //required
      className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-SurfieGreen focus:border-SurfieGreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      placeholder={placeholder}
    />
  );
};
