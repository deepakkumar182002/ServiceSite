import React from 'react'
import Image from 'next/image'
// import temp3 from '../public/temp3.jpg'
import temp from '../public/temp1.png'
import temp4 from '../public/temp4.jpg'
import temp6 from '../public/temp6.jpg'
import temp7 from '../public/temp7.jpg'
// import temp8 from '../public/temp8.jpg'
import temp5 from '../public/temp5.jpg'
import temp11 from '../public/temp11.jpg'
import temp9 from '../public/temp9.jpg'
import temp10 from '../public/temp10.jpg'
// import temp14 from '../public/temp14.jpg'
import StatsSection from './StatsSection'
// import Footer from './Footer'

export default function Homepage() {
    return (
        <>
            <div className="flex items-center bg-fixed flex-col justify-center h-full">
                {/* <Image src={temp14}  alt="" className='' /> */}
                <div className="container mx-auto bg-white w-2/3 md:p-4  relative">
                    {/* form  */}

                    <div className="justify-between grid  md:grid-cols-2 md:gap-4 gap-2">
                        <div className="max-w-md bg-white overflow-hidden w-full">
                            <div className="md:text-2xl md:py-4 py-2 px-6 bg-gray-900 text-white text-start md:text-center font-bold uppercase">
                                Book an Appointment
                            </div>
                            <form className="py-4 px-6" action="" method="POST">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email" type="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phone" type="tel" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                                        Service
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="haircut">Rent</option>
                                        <option value="coloring">Buying</option>
                                        <option value="styling">Order</option>
                                        <option value="facial">Others</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message" rows="4" placeholder="Enter any additional information"></textarea>
                                </div>
                                <div className="flex items-center justify-center mb-4">
                                    <button
                                        className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Book Appointment
                                    </button>
                                </div>

                            </form>
                        </div>
                        <Image src={temp6} alt="" className='' />
                    </div>
                    <hr />
                    {/* <Image src={temp} alt="" className='my-2' /> */}
                    <h2 className='text-sm md:text-4xl font-bold my-16 text-center drop-shadow-lg'>mobility ecosystem driving communities forward</h2>
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
                        <div className=" break-inside-avoid mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp7} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp5} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp11} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp10} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp4} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp9} alt="Gallery image" />
                        </div>
                    </div>
                    <StatsSection />


                </div>
            </div>

            {/* <div className="flex z-10 bottom-0">
                <Footer />
            </div> */}

        </>
    )
}
