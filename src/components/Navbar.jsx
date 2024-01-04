import React from 'react'

const Navbar = () => {
  return (
      <div className=" h-[120px] left-0px-6 flex justify-between shadow-3xl items-center px-10">   
        <h3 className="lg:text-4xl md:text-4xl xl:text-4xl text-[30px] font-semibold">Welcome!</h3>
        <div className="flex space-x-5">
           <button className="bg-black text-white lg:text-2xl md:text-2xl xl:text-2xl sm:text-2xl text-lg p-6 rounded-lg">Categories</button>
        </div>
    </div>
  )
}

export default Navbar
