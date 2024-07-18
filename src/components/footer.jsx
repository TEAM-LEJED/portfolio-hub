import React from 'react'
import Logo from "../assets/lejed.png";

const Footer = () => {
  return (
    <div className="bg-darkGray py-14">

<div className="container flex flex-col gap-3 justify-center items-center">
<img src={Logo} alt="" className="w-[100px]" />

<p className="text-white">
  Copyright &copy; 2024. All Rights Reserved
</p>
<p className="text-white">Subscribe: <a href="#" className="text-primary">Portfolio Hub GH.</a> </p>
</div>
    </div>
  )
}

export default Footer