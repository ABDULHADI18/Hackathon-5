import React from 'react'
import Image from 'next/image'

const White_div = () => {
  return (
         <div className="flex items-center justify-between mt-16 flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src={"/universe.png"}
            alt="universe"
            height={774}
            width={725}
            className="w-full"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-auto mt-6 md:mt-0 mr-24">
          <h3 className="text-[#BDBDBD] font-bold text-[16px]">SUMMER 2020</h3>
          <h2 className="text-[#252B42] font-bold text-[30px] sm:text-[40px] mt-8">
            Part of the Neural <br /> Universe
          </h2>
          <p className="text-[#737373] text-[14px] sm:text-[20px] mt-7">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <div className="flex gap-5 mt-5 justify-center md:justify-start">
            <button className="text-white text-[14px] font-bold py-3 px-8 rounded-md bg-[#23A6F0] hover:bg-gray-500 hover:text-[#2DC071] md:bg-[#2DC071] md:hover:bg-transparent md:hover:bg-gray-500">
              Buy Now
            </button>
            <button className="text-[#23A6F0] text-[14px] font-bold py-3 px-8 rounded-md border-2 border-[#23A6F0] hover:bg-gray-500 md:border-[#2DC071] md:text-[#2DC071] md:hover:bg-gray-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default White_div
