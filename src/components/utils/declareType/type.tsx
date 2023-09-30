

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

  | CssGlobals;

export type btnType = "primary" | "secondary" | "link";

interface InputProps {

  name: string;

  placeholder: string;

  icon?: boolean;

  onChange: any;

  value: string;

  prefix?: any;
  height:string;
  width:string;

}

interface CustomTextProps {

  text: string;

  textType?: string;

  className: string;

}

 

interface ButtonProps {

  children: string;

  fontSize?: string;

  onClick?: Function;

  type: btnType;

}

 

export type { ButtonProps, CustomTextProps, InputProps };

 