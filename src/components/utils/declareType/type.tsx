 interface InputProps {
    name: string;
    placeholder: string;
    icon?: boolean;
    onChange: any;
    value: string;
    className: string;
    prefix:any;
  }
  interface CustomTextProps{
    text:string,
    textType?:string,
    className:string,
  }



  export type { CustomTextProps, InputProps };

