import React from 'react'
import { classNames } from '../../../utils/classNames'

const Button = (props: any) => {
  const { variant = "fill", onClick, title, icons } = props

  return (
    <>
      <button onClick={onClick} className={classNames(variant === "fill" ? "bg-red-400 text-white flex justify-center" : "outline text-[#5c6bb0]", "my-2 p-3 rounded-lg text-justify flex place-items-center w-[124px] ")}><img src={icons} alt="" />{title}</button>
    </>
  )
}

export default Button