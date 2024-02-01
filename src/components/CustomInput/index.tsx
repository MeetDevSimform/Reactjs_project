import classNames from 'classnames';
import React from 'react'



type InputProps ={
    placeholder:string
    value?:string
    // changeHandler?:()=>void
    [key: string]: any;

}


const CustomInput:React.FC<InputProps>  = ({placeholder ,type,value,className,...restProps}:InputProps) => {

    const buttonClasses = classNames(
        'input',

      
        className
      );
  return (
   <>
   <input className={``}  placeholder={placeholder} value={value}  type={type} {...restProps}/>
   </>
  )
}

export default CustomInput