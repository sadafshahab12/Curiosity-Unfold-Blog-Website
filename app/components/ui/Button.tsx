import React from 'react'

interface BtnProp {
    btnText : string;
}

const Button = ({btnText}:BtnProp) => {
  return (
    <>
      <button className='border border-slate-800 bg-slate-800 text-fuchsia-300 font-medium py-2 px-4 rounded-md  hover:bg-transparent hover:text-slate-800 transition-all ease-in duration-300 sm:text-sm text-[0.7rem]'>{btnText}</button>
    </>
  )
}

export default Button
