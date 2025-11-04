import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[1109.83px] h-7 flex flex-row justify-between mt-8 mb-9 " >
                <div className="flex h-[25px] w-[143px] bg-no-repeat bg-[url('/LandingPage/audiophile.png')]">
                </div>
                <div className="flex gap-[34px] w-[429px] h-[25px] text-[13px]">
                    <Link href="/" className='w-11 font-bold tracking-[2px] hover:text-[#D87D4A] duration-500 '>HOME</Link>
                    <Link href="/Headphones" className='w-[106px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500'>HEADPHONES</Link>
                    <Link href="/Speakers" className='w-[81px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500'>SPEAKERS</Link>
                    <Link href="/Earphones" className='w-[94px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500'>EARPHONES</Link>
                </div>
                <div className="flex">
                    <Link href="/Cart" className="group">
                        <ShoppingCart className="text-white group-hover:text-[#D87D4A] transition-colors duration-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
}