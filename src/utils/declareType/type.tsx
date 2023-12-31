import { MutableRefObject } from "react"

type RGB = `rgb(${string})`

type RGBA = `rgba(${string})`

type HEX = `#${string}`

type HSL = `hsl(${string})`

type HSLA = `hsla(${string})`

type VAR = `var(${string})`

// type str = "";

type CssGlobals = "inherit" | "initial" | "revert" | "unset"

export type Color =
  | "currentColor"
  | "transparent"
  | RGB
  | RGBA
  | HEX
  | HSL
  | HSLA
  | VAR
  | CssGlobals

export type btnType = "primary" | "secondary" | "link"

interface InputProps {
  name: string
  placeholder: string
  icon?: boolean
  onChange: any
  value: string
  prefix?: any
  height?: string
  width?: string
  type?: string
  className?: string
  error?: boolean
  helperText?: string
  rest?: any
  ref?:MutableRefObject<any>
  isDisabled?:boolean
}

interface CustomTextProps {
  text: string
  textType?: string
  className: string
}

interface ButtonProps {
  children: string
  fontSize?: string
  onClick?: Function
  type: btnType
}
interface CmsDataState {
  cmsData: Array<Object>
}

export type { ButtonProps, CmsDataState, CustomTextProps, InputProps }

