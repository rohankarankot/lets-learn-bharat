import { InputProps } from "@/utils/declareType/type"

export const SearchInput = ({
  name,
  placeholder,
  prefix,
  value,
  onChange,

  height,
  width,
  ...rest
}: InputProps) => {
  return (
    <div
      className={` flex h-[7.042253521126761vh] w-[47.447916666666664vw]  items-center px-5 border-2 border-bermuda rounded-lg `}
    >
      {prefix && <div className="">{prefix}</div>}
      <input
       {...rest}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={
          "w-[90%] h-full focus:outline-none placeholder-offWhite font-bold text-base pl-2"
        }
      />
    </div>
  )
}

export const FormInput = ({
  type,
  onChange,
  placeholder,
  value,
  className,
  prefix,
  ...rest
}: InputProps) => {
  console.log("rest", rest)
  return (
    <input
      type={type}
      {...rest}
      onChange={onChange}
      value={value}
      //required
      className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-SurfieGreen focus:border-SurfieGreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      placeholder={placeholder}
    />
  )
}
