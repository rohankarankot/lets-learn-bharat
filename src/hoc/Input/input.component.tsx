import { InputProps } from "@/utils/declareType/type"
import { nanoid } from "@reduxjs/toolkit"

export const SearchInput = ({
  name,
  placeholder,
  prefix,
  value,
  onChange,
  postFix,
  height,
  width,

  ...rest
}: InputProps) => {
  return (
    <div
      className={`flex h-[100%] w-[100%]  items-center  border-2 border-bermuda rounded-lg `}
    >
      <div className="px-5 flex items-center w-[100%]">
        {prefix && <div className="">{prefix}</div>}
        <input
          {...rest}
          // ref={ref}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={
            "w-full h-full focus:outline-none placeholder-offWhite font-bold text-base pl-2 "
          }
        />
      </div>
      <div className="mx-5" {...rest}>
        {postFix ? postFix : ""}
      </div>
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
  error,
  helperText,
  isDisabled,
  ...rest
}: InputProps) => {
  return (
    <div className="w-full" id={nanoid.toString()}>
      <input
        type={type}
        {...rest}
        onChange={onChange}
        value={value}
        //required
        className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-SurfieGreen focus:border-SurfieGreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        placeholder={placeholder}
        disabled={isDisabled}
      />
      {error && (
        <h6 className="text-xs  font-semibold" style={{ color: "red" }}>
          {helperText}
        </h6>
      )}
    </div>
  )
}
