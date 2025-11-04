"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonOne from "@/components/button-1";
import ButtonTwo from "@/components/button-2";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { Product } from "@/app/data/products";
import ButtonFour from "./button-4";

type ProductItemProps = {
    product: Product


}

export default function ProductItem({ product }: ProductItemProps) {
    const router = useRouter();


    return (
        <div className="bg-neutral-50 min-h-screen flex flex-col items-center">

            <header className="w-full bg-black text-white">
                <Navbar />
            </header>

            <div className="w-full max-w-[1440px]">
                <div className="max-w-[1110px] mx-auto pt-[79px]">
                    <Link href="/" >
                        <button onClick={() => router.back()} className="text-black font-medium opacity-50 cursor-pointer">
                         Go back
                        </button>
                    </Link>
                </div>
                <main className="px-[165px] pt-14">
                    <article className="flex gap-[125px] items-center pb-40">
                        <div className="w-[540px] h-[560px] flex flex-col justify-center items-center rounded-lg bg-[#F1F1F1]">
                            <Image
                                alt="speaker"
                                width={291.24}
                                height={350}
                                src={product.image}
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

                            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-11 uppercase mb-8">
                                {product.name}
                            </h2>

                            <p className="opacity-50 font-medium text-black text-[15px] leading-[25px] mb-10 " >
                                {product.description}

                            </p>
                            <p className="font-bold text-[18px] tracking-[1.3px] pb-[47px]">$ {product.price}</p>
                            <div className="flex flex-row gap-5">
                                <ButtonTwo />
                                <ButtonFour />
                            </div>
                        </div>
                    </article>

                    <article className="flex flex-row gap-[125px] pb-40">
                        <div className="w-[635px] flex flex-col gap-8">
                            <h5>FEATURES</h5>
                            <p className="opacity-50" style={{ whiteSpace: "pre-wrap" }}>{product.features}</p>
                        </div>
                        <div>
                            <h5 className="pb-8">In the box</h5>
                            {product.includes.map((include, idx) => (
                                <p key={idx} className="gap-7 flex flex-row">
                                    <span className="text-[#D87D4A] w-[18px] font-bold">
                                        {include.quantity}x
                                    </span>
                                    {include.item}
                                </p>))}
                        </div>
                    </article>


                    {/* Three Images */}

                    <section className="w-[1110px] h-[592px] flex flex-row gap-[30px]">
                        <div className="flex flex-col gap-8">
                            <div className="bg-no-repeat bg-cover  w-[445px] h-[280px]" style={{ backgroundImage: `url(${product.gallery[0]})` }}></div>
                            <div className="bg-no-repeat bg-cover  w-[445px] h-[280px]" style={{ backgroundImage: `url(${product.gallery[1]})` }}></div>
                        </div>
                        <div className="bg-no-repeat bg-cover w-[635px] h-[592px]" style={{ backgroundImage: `url(${product.gallery[2]})` }}></div>
                    </section>

                    {/* YOU MAY ALSO LIKE */}
                    <section className="w-[1110px] h-[571px] flex flex-col items-center pt-40 gap-16">
                        <div><h5>you may also like</h5></div>

                        <div className="flex flex-row gap-[30px]">
                            {product.others.map((item) => (
                                <div key={item.slug} className="w-[350px] h-[471px] flex flex-col gap-8 ">

                                    <div className="flex justify-center h-[318px] items-center bg-[#F1F1F1] rounded-lg">
                                        <Image
                                            src={item.image}
                                            width={133}
                                            height={191}
                                            alt={item.name}
                                        />
                                    </div>

                                    <h5 className="items-center flex flex-col">{item.name}</h5>

                                    <div className="items-center flex flex-col">
                                        <Link href={`/product/${item.slug}`}>
                                            <ButtonOne />
                                        </Link>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>


                    <section className="mt-[360px] flex gap-[30px]">
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
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="tracking-[1px] text-black opacity-50 text-[13px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                </button>
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
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-colors duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                </button>
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
                                <button className="cursor-pointer flex flex-row justify-center items-center gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                                    <span className="text-[#D87D4A]">
                                        <ChevronRight size={15} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="mt-40 pb-40 flex gap-[125px] items-center">
                        <div className="flex flex-col gap-8  w-[445px] h-[295px]">
                            <h2>Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                        </div>

                        <div className="w-[540px] h-[588px] bg-no-repeat bg-cover bg-[url('/LandingPage/male-model.png')] rounded-lg"></div>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    )
}