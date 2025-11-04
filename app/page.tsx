import HeroSection from "@/components/Hero-section";
import Image from "next/image"
import { ChevronRight } from 'lucide-react';
import ButtonTwo from "@/components/button-2";
import ButtonThree from "@/components/button-3";
import Footer from "@/components/Footer";
import { products } from "./data/products";
import Link from "next/link";

export default function Home() {
  const productId = products[1].slug;
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Category Section */}
      <div className="w-full flex justify-center">
        <div className="flex max-w-[1440px] w-full px-4 md:px-6 lg:w-[1110px] h-auto md:h-[284px]">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-[30px] mt-16 md:mt-[120px] w-full">
            {/* Headphones */}
            <div className="w-full md:w-[350px] h-[165px] md:h-[284px] flex flex-col items-center justify-center relative">
              <div className="w-20 md:w-[122.95px] h-24 md:h-40 absolute z-2 -top-8 md:-top-10 flex flex-col gap-0">
                <Image
                  src="/LandingPage/headphones.png"
                  alt="headphones"
                  width={122.95}
                  height={160}
                  className="w-16 md:w-auto h-auto"
                />
                <Image
                  src="/LandingPage/Oval.png"
                  alt="oval-shadow"
                  width={122}
                  height={18}
                  className="opacity-50 w-16 md:w-auto"
                />
              </div>
              <div className="w-full md:w-[350px] h-[165px] md:h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-20 md:pt-[116px] gap-3 md:gap-[15px]">
                <h6 className="text-sm md:text-base">headphones</h6>
                <Link href="/Headphones">
                  <button className="cursor-pointer flex flex-row justify-center items-center gap-2 md:gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                    <span className="tracking-[1px] text-black opacity-50 text-[13px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                    <span className="text-[#D87D4A]">
                      <ChevronRight size={15} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Speakers */}
            <div className="w-full md:w-[350px] h-[165px] md:h-[284px] flex flex-col items-center justify-center relative">
              <div className="w-20 md:w-[121.49px] h-20 md:h-[146px] absolute z-2 -top-6 md:top-[-35px] flex flex-col gap-0">
                <Image
                  src="/LandingPage/speaker-small.png"
                  alt="speaker"
                  width={121.49}
                  height={146}
                  className="w-16 md:w-auto h-auto"
                />
                <Image
                  src="/LandingPage/Oval.png"
                  alt="oval-shadow"
                  width={122}
                  height={18}
                  className="opacity-50 w-16 md:w-auto"
                />
              </div>
              <div className="w-full md:w-[350px] h-[165px] md:h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-20 md:pt-[116px] gap-3 md:gap-[15px]">
                <h6 className="text-sm md:text-base">speakers</h6>
                <Link href="/Speakers">
                  <button className="cursor-pointer flex flex-row justify-center items-center gap-2 md:gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-colors duration-500">SHOP</span>
                    <span className="text-[#D87D4A]">
                      <ChevronRight size={15} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Earphones */}
            <div className="w-full md:w-[350px] h-[165px] md:h-[284px] flex flex-col justify-center relative items-center">
              <div className="absolute z-2 w-24 md:w-[178px] h-20 md:h-[161px] flex items-center justify-center -top-4 md:top-[-13px] flex-col gap-0">
                <Image
                  src="/LandingPage/earbuds.png"
                  alt="earbuds"
                  width={125}
                  height={126}
                  className="w-16 md:w-auto h-auto"
                />
                <Image
                  src="/LandingPage/Oval.png"
                  alt="oval-shadow"
                  width={122}
                  height={18}
                  className="opacity-50 w-16 md:w-auto"
                />
              </div>
              <div className="w-full md:w-[350px] h-[165px] md:h-[204px] bg-[#F1F1F1] absolute z-1 rounded-lg flex flex-col items-center pt-20 md:pt-[116px] gap-3 md:gap-[15px]">
                <h6 className="text-sm md:text-base">earphones</h6>
                <Link href="/Earphones">
                  <button className="cursor-pointer flex flex-row justify-center items-center gap-2 md:gap-[13.32px] text-white font-bold w-[57.32px] h-[18px] uppercase text-[13px] tracking-[1px]">
                    <span className="text-black opacity-50 text-[13px] tracking-[1px] hover:text-[#D87D4A] hover:opacity-100 transition-all duration-500">SHOP</span>
                    <span className="text-[#D87D4A]">
                      <ChevronRight size={15} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ZX9 Speaker Section */}
      <div className="w-full flex justify-center pt-16 md:pt-[168px] pb-12">
        <div className="flex flex-col md:flex-row max-w-[1440px] w-full px-4 md:px-6 lg:w-[1110px] h-auto md:h-[560px] bg-[#D87D4A] rounded-lg overflow-hidden">
          <div className="w-full md:w-[944px] h-80 md:h-[944px] bg-no-repeat bg-[url('/LandingPage/spiral.png')] bg-center md:bg-left absolute z-0 overflow-hidden">
            <div className="w-64 md:w-[410.23px] h-60 md:h-[493px] mt-8 md:mt-24 mx-auto md:ml-[117.49px] flex flex-col justify-center items-center relative z-5">
              <Image
                src="/LandingPage/speaker.png"
                alt="speaker"
                width={410}
                height={464}
                className="translate-y-[-3%] w-48 md:w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-[349px] h-auto md:h-[303px] text-white mt-8 md:mt-[133px] mx-auto md:mr-[95px] md:ml-auto relative z-10 px-4 md:px-0 text-center md:text-left pb-8 md:pb-0">
            <h1 className="pb-4 md:pb-6 text-3xl md:text-4xl lg:text-5xl">ZX9 SPEAKER</h1>
            <p className="h-auto md:h-[75px] w-full md:w-[349px] mb-6 md:mb-10 text-sm md:text-base">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href={`/product/${productId}`}>
              <ButtonTwo />
            </Link>
          </div>
        </div>
      </div>

      {/* ZX7 Speaker Section */}
      <div className="w-full flex justify-center pb-12">
        <div className="max-w-[1440px] w-full px-4 md:px-6 lg:w-[1110px] h-80 md:h-[330px] bg-no-repeat bg-[url('/LandingPage/speaker-table.jpg')] bg-cover md:bg-contain z-0 rounded-lg">
          <div className="w-full md:w-[204px] h-auto md:h-[118px] z-10 pt-16 md:pt-[101px] pl-6 md:pl-[95px]">
            <h4 className="text-2xl md:text-3xl">zx7 speaker</h4>
            <Link href={`/product/${products[2].slug}`}>
              <ButtonThree />
            </Link>
          </div>
        </div>
      </div>

      {/* YX1 Earphones Section */}
      <div className="w-full flex justify-center pb-12">
        <div className="max-w-[1440px] w-full px-4 md:px-6 lg:w-[1110px] h-auto md:h-80 flex flex-col md:flex-row gap-6 md:gap-[30px]">
          <div className="w-full md:w-[540px] h-80 bg-no-repeat bg-[url('/LandingPage/image-earphones.jpg')] bg-cover rounded-lg"></div>
          <div className="w-full md:w-[540px] h-80 bg-[#F1F1F1] flex flex-col gap-6 md:gap-8 justify-center items-center md:items-start pl-0 md:pl-[95px] rounded-lg">
            <h4 className="text-2xl md:text-3xl">YX1 EARPHONES</h4>
            <Link href={`/product/${products[3].slug}`}>
              <ButtonThree />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-center pb-12">
        <div className="max-w-[1440px] w-full px-4 md:px-6 lg:w-[1110px] h-auto md:h-[588px] flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex justify-center items-center pr-0 md:pr-[125px] order-2 md:order-1">
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-[445px] h-auto md:h-[295px] text-center md:text-left">
              <h2 className="text-3xl md:text-4xl">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h2>
              <p className="text-sm md:text-base">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[540px] h-80 md:h-[588px] bg-no-repeat bg-[url('/LandingPage/male-model.png')] bg-cover rounded-lg order-1 md:order-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}