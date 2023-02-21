import Image from 'next/image'

import React from 'react'

const BannerList = () => {
  return (
    <div className='relative'>

      <Image src='/33.jpg'
        width={1600} height={50} alt='image'></Image>
      <h1 className='absolute top-10 text-white  text-center w-full font-bold'>Welcome to Our Website</h1>
    </div>
  )
}

export default BannerList