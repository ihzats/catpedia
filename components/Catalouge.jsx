import React from 'react'
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const ItemProduct = (props) => {
  return (
    <div className="relative">
      <div className="mb-5">
        <Image src={props.image} width={484} height={704} className="rounded-xl mx-auto" alt="" />
      </div>
      <Link href={props.link} className="flex items-center justify-between px-6 md:px-2 lg:px-4">
        <div className="font-medium">
          <h4 className="font-Poppins text-3xl">{props.title}</h4>
          <h6 className="text-xl mb-6">Explore Now!</h6>
        </div>
        <BsArrowRight className="text-xl" />
      </Link>
    </div>
  )
}

export default function Catalogue() {
  return (
    <div className=" container mx-auto my-10 pt-32 pb-12">
      <h1 className="font-black text-2xl lg:text-2xl text-center mb-12">Species Cat</h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:space-x-2 lg:space-x-5 cursor-pointer">
        <ItemProduct image="/img/1.png" link="/" title="Rogdoll" />
        <ItemProduct image="/img/2.png" link="/" title="Siam Cat" />
        <ItemProduct image="/img/3.png" link="/" title="Persian Cat" />
      </div>
    </div>
  )
}