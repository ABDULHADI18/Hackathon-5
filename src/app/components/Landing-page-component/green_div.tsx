import React from 'react'
import Image from 'next/image'


const Green_div = () => {
  return (
    <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-16 pt-7 flex items-center justify-between flex-col md:flex-row">
    {/* Text Section */}
    <div className="text-white space-y-4 ml-4 sm:ml-12 md:ml-36 text-center sm:text-left">
      <h3 className="text-[20px]">SUMMER 2020</h3>
      <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold">
        Vita Classic <br /> <span>Product</span>
      </h2>
      <p className="text-[14px] sm:text-[16px]">
        We know how large objects will act, We know <br />
        <span>how objects will act, We know</span>
      </p>

      {/* Price and Button Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
        <h3 className="text-[24px] font-bold">{`$16.48`}</h3>
        <button className="text-[14px] font-bold bg-[#2DC071] py-4 px-10 rounded-md hover:bg-gray-500 mt-4 sm:mt-0">
          ADD TO CART
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full sm:w-[400px] md:w-[510px] flex-shrink-0">
      <Image
        src={"/classic.png"}
        alt="classic"
        width={510}
        height={685}
        className="w-full object-cover"
      />
    </div>
  </div>
  )
}

export default Green_div
