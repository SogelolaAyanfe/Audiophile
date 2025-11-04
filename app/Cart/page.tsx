"use client"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer"

export default function Cart() {
    const router = useRouter();
    return (
        <div className="bg-neutral-50 min-h-screen flex flex-col items-center">
            {/* Navbar placeholder - import your own Navbar component here */}
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
                <main className="px-[165px] pt-[38px] flex flex-row gap-[30px] pb-[141px] ">
                    <section className="p-[54px] bg-[#FFFFFF] rounded-lg">
                        <h4 className="text-2xl font-semibold mb-[41px] ">CHECKOUT</h4>


                        <div className="mb-8">
                            <p className=" text-[#D87D4A] text-[13px] font-bold">BILLING DETAILS</p>

                            <div className="flex flex-row gap-4 pt-4 mb-6">
                                <div className="flex flex-col h-[81px] w-[309px] gap-[9px]">
                                    <label className="text-[12px] font-bold">Name</label>
                                    <input placeholder="Alexei Ward" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40" />
                                </div>
                                <div className="flex flex-col gap-[9px]">
                                    <label className="text-[12px] font-bold">Email Address</label>
                                    <input type="email" placeholder="alexei@email.com" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[12px] font-bold pb-[9px]">Phone Number</label>
                                <input placeholder="+1 202-555-0136" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-[#CFCFCF] placeholder-opacity-40" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 pb-[61px]">
                            <p className=" text-[#D87D4A] text-[13px] font-bold">SHIPPING INFO</p>

                            <div className="flex flex-col gap-[9px]">
                                <label className="text-[12px] font-bold">Address</label>
                                <input type="text" placeholder="1137 Williams Avenue" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col gap-[9px]">
                                    <label className="text-[12px] font-bold">ZIP Code</label>
                                    <input type="text" placeholder="10001" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40" />
                                </div>
                                <div className="flex flex-col gap-[9px]">
                                    <label className="text-[12px] font-bold">City</label>
                                    <input type="text" placeholder="New York" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[9px]">
                                <label className="text-[12px] font-bold">Country</label>
                                <input type="text" placeholder="United States" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40 text-[19px]" />
                            </div>
                        </div>

                        <div>
                            <p className=" text-[#D87D4A] text-[13px] font-bold pb-4">Payment Details</p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label className="text-[12px] font-bold">Payment Method</label>

                                <div className="space-y-3">
                                    <label className="flex items-center px-4 py-3 border border-gray-300 rounded cursor-pointer">
                                        <input type="radio" name="payment" value="emoney" checked className="w-4 h-4 text-[#D87D4A] rounded-lg pb-[19px] pt-[18px]" />
                                        <span className="text-[12px] font-bold pl-4">e-Money</span>
                                    </label>

                                    <label className="flex items-center px-4 py-3 border border-gray-300 rounded cursor-pointer">
                                        <input type="radio" name="payment" value="cod" className="w-4 h-4 text-[#D87D4A] rounded-lg pb-[19px] pt-[18px]" />
                                        <span className="text-[12px] font-bold pl-4">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-[9px]">
                                    <label className="text-[12px] font-bold">e-Money Number</label>
                                    <input type="text" placeholder="238521993" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40 pb-[19px] pt-[18px]" />
                                </div>
                                <div className="flex flex-col gap-[9px]">
                                    <label className="text-[12px] font-bold">e-Money PIN</label>
                                    <input type="text" placeholder="6891" className="w-[309px] h-14 border-[#CFCFCF] rounded-lg border pl-6 placeholder-opacity-40 pb-[19px] pt-[18px]" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-[350px] h-[612px] bg-[#FFFFFF] rounded-lg p-[32px]">
                        <div><h6>SUMMARY</h6></div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                       
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between gap-30">
                                <p>SHIPPING</p>
                                <span className="text-[18px] font-bold">$50</span></div>
                            <div className="flex justify-between w-[284px]">
                                <p className="w-[114px]">VAT(INCLUDED)</p>
                                <span className="text-[18px] font-bold">$5,466</span></div>
                            <div className="flex justify-between ">
                                <p>GRAND TOTAL</p>
                                <span className="text-[#D87D4A] text-[18px] font-bold">$5,466</span>
                            </div>
                            <div>
                                <button className="bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer duration-500 text-white font-bold w-[284px] h-12 uppercase text-[13px] tracking-[1px] transition-colors p-[15px]">
                                    CONTINUE AND PAY
                                </button>
                            </div>
                        </div>


                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}