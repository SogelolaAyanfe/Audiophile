import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonOne from "@/components/button-1";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { products } from "../data/products";
import HeadPhones from '../Headphones/page';

export default function Earphones() {
    return (
        <div> <div className="bg-neutral-50 min-h-screen flex flex-col items-center">
            <header className="w-full bg-black text-white">
                <Navbar />
                <div className="max-w-[1110px] mx-auto">
                    <hr className="border-[#FFFFFF] border-opacity-20 " />
                </div>

                <div className="px-[165px] py-24">
                    <h2 className="font-['Manrope'] font-bold text-white text-[40px] text-center tracking-[1.43px] leading-11 uppercase">
                        Earphones
                    </h2>
                </div>

            </header>

            <div className="w-full max-w-[1440px]">
                <main className="px-[165px] pt-40">
                    <article className="flex gap-[125px] items-center pb-40">
                        <div className="w-[540px] h-[560px] flex flex-col justify-center items-center rounded-lg bg-[#F1F1F1]">
                            <Image
                                alt="XX99 Mark II Headphones"
                                width={296}
                                height={298}
                                src="/LandingPage/earbuds.png"
                                className="translate-y-18"


                            />
                            <Image
                                src="/LandingPage/Oval.png"
                                alt="oval-shadow"
                                width={400}
                                height={18}
                               
                            />
                        </div>

                        <div className="flex-1 max-w-[445px]">
                            <span className="block font-['Manrope'] font-normal text-[#d87d4a] text-sm tracking-[10px] leading-[normal] uppercase mb-4">
                                NEW PRODUCT
                            </span>

                            <h2 className="font-['Manrope'] font-bold text-black text-[40px] tracking-[1.43px] leading-11 uppercase mb-8">
                                YX1 WIRELESS

                                <br />
                                EARPHONES
                            </h2>

                            <p className="opacity-50 font-['Manrope'] font-medium text-black text-[15px] leading-[25px] mb-10">
                                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                                Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                            </p>
                            <Link href={`/product/${products[3].slug}`}>
                            <ButtonOne />
                            </Link>

                        </div>
                    </article>


                    <section className=" flex gap-[30px] pb-40">
                        <div className="w-[350px] h-[284px] flex flex-col items-center justify-center relative">
                            <div className="absolute z-2 top-[-35px] flex flex-col gap-0">
                                <Image
                                    src="/LandingPage/headphones.png"
                                    alt="headphones"
                                    width={122.95}
                                    height={160}
                                />
                                <Image
                                    src="/LandingPage/Oval.png"
                                    alt="oval-shadow"
                                    width={122}
                                    height={18}
                                    className="opacity-50"
                                />
                            </div>
                            <div className="w-[350px] h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-[116px] gap-[15px]">
                                <h6>headphones</h6>
                                <Link href="Headphones">
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="tracking-[1px] text-black opacity-50 text-[13px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                    </button>
                                    </Link>
                            </div>
                        </div>

                        {/* Second card - Speakers */}
                        <div className="w-[350px] h-[284px] flex flex-col items-center justify-center relative">
                            <div className="w-[121.49px] h-[146px] absolute z-2 top-[-35px] flex flex-col gap-0">
                                <Image
                                    src="/LandingPage/speaker-small.png"
                                    alt="speaker"
                                    width={121.49}
                                    height={146}
                                />
                                <Image
                                    src="/LandingPage/Oval.png"
                                    alt="oval-shadow"
                                    width={122}
                                    height={18}
                                    className="opacity-50"
                                />
                            </div>
                            <div className="w-[350px] h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-[116px] gap-[15px]">
                                <h6>speakers</h6>
                                <Link href="Speakers">
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-colors duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                    </button>
                                    </Link>
                            </div>
                        </div>

                        {/* Third card - Earphones */}
                        <div className="w-[350px] h-[284px] flex flex-col justify-center relative items-center">
                            <div className="absolute z-2 w-[178px] h-[161px] flex items-center justify-center top-[-13px] flex-col gap-0">
                                <Image
                                    src="/LandingPage/earbuds.png"
                                    alt="earbuds"
                                    width={125}
                                    height={126}
                                />
                                <Image
                                    src="/LandingPage/Oval.png"
                                    alt="oval-shadow"
                                    width={122}
                                    height={18}
                                    className="opacity-50"
                                />
                            </div>
                            <div className="w-[350px] h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-[116px] gap-[15px]">
                                <h6>earphones</h6>
                                <Link href="Earphones">
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                    </button>
                                    </Link>
                            </div>
                        </div>
                    </section>

                    <section className="flex gap-[125px] items-center pb-40">

                        <div className="flex flex-col gap-8  w-[445px] h-[295px]">
                            <h2>Bringing you the <span className="text-[#D87D4A]">best</span>  audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>


                        </div>

                        <div className="w-[540px] h-[588px] bg-no-repeat bg-[url('/LandingPage/male-model.png')] rounded-lg"></div>
                    </section>
                </main>
            </div>

            <Footer />
        </div></div>
    )
}