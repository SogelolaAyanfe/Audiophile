import Link from "next/link"
export default function Footer() {
    return (
        <div className="w-full bg-black text-white flex flex-col items-center">
            <div className="w-[1110px] flex justify-start">
                <hr className="w-[101px] h-[4px] bg-[#D87D4A]"></hr>
            </div>

            <div className="w-[1110px] flex flex-row justify-between items-center mt-8 mb-9">

                <div className="w-[243.25px] h-[25px] bg-no-repeat bg-[url('/LandingPage/audiophile.png')]"></div>
                <div className="flex gap-[34px]">
                    <Link href="/" className="text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500">HOME</Link>
                    <Link href="/" className="text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500">HEADPHONES</Link>
                    <Link href="/" className="text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500">SPEAKERS</Link>
                    <Link href="/" className="text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] duration-500">EARPHONES</Link>
                </div>
            </div>
            <div className=" flex flex-row justify-between w-[1110px] pb-14">
                <div className="w-[540px] h-[100px]">
                    <p className="opacity-50">Audiophile is an all in one stop to fulfill
                        your audio needs. We&apos;re a small team of
                        music lovers and sound specialists who are devoted
                        to helping you get the most out of personal audio.
                        Come and visit our demo facility - we’re open 7 days a week.</p>
                </div>
                <div className=" flex flex-row w-[104px] h-6 gap-4 mt-[60.25px]">
                    <Link href="/">
                        <svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon w-[24px] h-[24px] fill-white hover:fill-[#D87D4A] duration-500 transition-colors">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                            </g>
                        </svg>
                    </Link>

                    <Link href="/">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white hover:fill-[#D87D4A] duration-500 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link href="/">
                        <svg
                            className="w-6 h-6 text-white hover:text-[#D87D4A] transition-colors duration-500 cursor-pointer"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="w-full flex justify-center pb-[48px]">
                <div className="w-[1110px] flex flex-col items-start">
                    <p className="opacity-50">Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}