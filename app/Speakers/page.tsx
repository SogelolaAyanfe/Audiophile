import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonOne from "@/components/button-1";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { products } from "../data/products";

export default function Speakers() {
    const productId = products[1].slug;
    return (
        
        <div className="bg-neutral-50 min-h-screen flex flex-col items-center">
            {/* Navbar placeholder - import your own Navbar component here */}
            <header className="w-full bg-black text-white">
                <Navbar />
                <div className="max-w-[1110px] mx-auto">
                    <hr className="border-[#FFFFFF] border-opacity-20 " />
                </div>

                <div className="px-[165px] py-24">
                    <h2 className="font-['Manrope'] font-bold text-white text-[40px] text-center tracking-[1.43px] leading-11 uppercase">
                        Speakers
                    </h2>
                </div>

            </header>

            <div className="w-full max-w-[1440px]">
                <main className="px-[165px] py-40">
                    <article className="flex gap-[125px] items-center pb-40">
                        <div className="w-[540px] h-[560px] flex flex-col justify-center items-center rounded-lg bg-[#F1F1F1]">
                            <Image
                                alt="ZX9 Speaker"
                                width={291.24}
                                height={350}
                                src="/ProductPage/zx9.png"
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
                                ZX9
                                <br />
                                SPEAKER
                            </h2>

                            <p className="opacity-50 font-['Manrope'] font-medium text-black text-[15px] leading-[25px] mb-10">
                                Upgrade your sound system with the all new ZX9 active speaker.
                                It’s a bookshelf speaker system that offers truly wireless connectivity
                                -- creating new possibilities for more pleasing and practical audio setups.
                            </p>
                            <Link href={`/product/${productId}`}>
                            <ButtonOne /></Link>

                        </div>
                    </article>
                    <article className="flex gap-[125px] items-center pb-40">
                        <div className="flex-1 max-w-[445px]">
                            <span className="block font-['Manrope'] font-normal text-[#d87d4a] text-sm tracking-[10px] leading-[normal] uppercase mb-4">
                                NEW PRODUCT
                            </span>

                            <h2 className="font-['Manrope'] font-bold text-black text-[40px] tracking-[1.43px] leading-11 uppercase mb-8">
                                ZX7

                                <br />
                                SPEAKER
                            </h2>

                            <p className="opacity-50 font-['Manrope'] font-medium text-black text-[15px] leading-[25px] mb-10">
                                Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end
                                audiophile components that represents the top of the line powered speakers for home or studio use.
                            </p>
                            <Link href={`/product/${products[2].slug}`}>
                                <ButtonOne /></Link>

                        </div>
                        <div className="w-[540px] h-[560px] flex flex-col justify-center items-center rounded-lg bg-[#F1F1F1]">
                            <Image
                                alt="XX99 Mark II Headphones"
                                width={268.02}
                                height={385}
                                src="/ProductPage/speaker-front.png"
                            />
                        </div>


                    </article>


                    <section className="pt-[100px] flex gap-[30px]">
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
                                <Link href="/Speakers">
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

                    <section className="mt-40 flex gap-[125px] items-center">

                        <div className="flex flex-col gap-8  w-[445px] h-[295px]">
                            <h2>Bringing you the <span className="text-[#D87D4A]">best</span>  audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>


                        </div>

                        <div className="w-[540px] h-[588px] bg-no-repeat bg-[url('/LandingPage/male-model.png')] rounded-lg"></div>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    )
}