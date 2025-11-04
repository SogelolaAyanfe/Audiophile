import Navbar from "./Navbar"
import Image from "next/image"
import ButtonOne from "./button-1"
import Link from "next/link"
import { products } from "@/app/data/products"

export default function HeroSection() {
    return (

        <div className="flex flex-col text-white bg-black w-full ">

            <div className="max-w-[1440px] mx-auto">
                <Navbar />
                <hr className="border-[#FFFFFF] border-opacity-20" />
                <div className="flex flex-row gap-[46.6px]">

                    <div className="flex flex-col max-w-[398px] mt-[225px] h-[346px] gap-6">
                        <span className="text-[#FFFFFF] opacity-50! tracking-[10px] h-3.5 font-normal uppercase">
                            NEW PRODUCT
                        </span>
                        <h1 className="text-[56px] font-bold leading-[58px] max-w-[396px] h-[116px] tracking-[2px] uppercase">
                            XX99 MARK II HEADPHONES
                        </h1>
                        <p className="text-[15px] font-medium leading-[25px] opacity-75! mb-4">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music enthusiast.
                        </p>
                        <Link href={`/product/${products[0].slug}`}>
                            <ButtonOne />
                        </Link>
                    </div>


                    <div className=" ">
                        <div className="flex w-[708.8px]  overflow-hidden items-center h-full">
                            <Image
                                src="/LandingPage/hero-image.png"
                                alt="Headphones"
                                width={708.8}
                                height={70}

                                className="translate-y-[-5%] max-w-[708.8px]"
                            />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}