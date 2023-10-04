import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Hero() {

    return (
        <div className="container pt-12">
            <div className="mx-auto p-4 mt-8 lg:flex lg:justify-between lg:px-20 shadow-xl rounded-md bg-slate-300">
                <div className="flex flex-col justify-center max-w-lg lg:mr-12">
                    <h1 className="font-black text-2xl lg:text-4xl lg:leading-[77px]">
                    <div>                      
                        <span className="block relative z-10">
                            <div className="absolute h-full w-full bg-teal-300 lg:h-full lg:bottom-0 lg:-rotate-2 -z-10" />
                            LET'S
                        </span>
                    </div>
                        <span className="block relative z-10">
                            EXPLORE
                        </span>
                        <span className="block">UNIQUE CATS.</span>
                    </h1>
                    <div className="mt-4 flex items-center">
                        <Link href="#" className="bg-black text-sm py-3 px-4 text-white rounded-md lg:px-7 hover:bg-teal-400">
                            Looking Now
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-8 lg:mt-0">
                        <Image src="/img/cats.png" width={270} height={32} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
