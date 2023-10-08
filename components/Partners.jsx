"use client"

import Image from "next/image"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container mb-24 min-h-[10px] w-full">
      <div className="text-xl font-bold text-center p-16 text- mx-auto text-bold">Our Partners</div>
      <div className="bg-teal-200 wrapper justify-between items-center py-7 shadow-md rounded-md mix-blend-color-burn px-8 ">
        <div className="slidepartner items-center">
          <Slider {...settings} className="mx-auto lg:px-16">
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
            <div>
              <Image src="/img/wiskas.png" width={150} height={40} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}