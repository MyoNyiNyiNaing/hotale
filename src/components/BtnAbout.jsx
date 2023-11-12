import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

const BtnAbout = () => {
  return (
    <button className=" uppercase text-[13px] font-[600] tracking-[4px] pt-[15px] pb-[10px] flex items-center gap-[10px] border-b border-gray-200">Learn more <span className=" text-xl"><MdArrowForwardIos/></span></button>
  )
}

export default BtnAbout