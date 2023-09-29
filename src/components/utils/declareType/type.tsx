type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;
type HSL = `hsl(${string})`;
type HSLA = `hsla(${string})`;
type VAR = `var(${string})`;
// type str = "";
type CssGlobals = "inherit" | "initial" | "revert" | "unset";
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
  ;
interface InputProps {
  name: string;
  placeholder: string;
  icon?: boolean;
  onChange: any;
  value: string;
  className: string;
  prefix: any;
}
interface CustomTextProps {
  text: string;
  textType?: string;
  className: string;
}

interface ButtonProps {
  children: string;
  className: string;
  txtColor: Color;
  fontSize: string;
  onClick:Function
}

export type { ButtonProps, CustomTextProps, InputProps };
