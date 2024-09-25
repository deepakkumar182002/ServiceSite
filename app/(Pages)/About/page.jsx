import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image'; // or your preferred image component if using Next.js
import temp10 from "../../../public/temp10.jpg"
import temp2 from "../../../public/temp2.jpg"
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
const About = () => {
    return (
        <>
        <Navigation />
            <div className="bg-white text-black min-h-screen p-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4">About Ridewaves</h1>
                        <p className="text-lg">Your trusted ride-sharing partner connecting you to your destination.</p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src={temp10} // Replace with a real image path
                            alt="Random Service"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Company Info Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                            <p className="text-md">
                                Ridewaves was founded with the mission of making urban transportation safer, more reliable, and accessible to everyone. We bring you ride-sharing options for your daily commute, city exploration, or airport transfers with a fleet of well-maintained vehicles and professional drivers.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
                            <p className="text-md">
                                Whether you&apos;re looking for a budget-friendly ride or a luxury experience, Ridewaves has got you covered. Our services include economy rides, premium cars, and more—providing flexibility and safety for every journey.
                            </p>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                            {/* Contact Item 1 */}
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-xl text-blue-500" />
                                <p className="text-lg">+91 8923798699</p>
                            </div>
                            {/* Contact Item 2 */}
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-xl text-red-500" />
                                <p className="text-lg">contact@ridewaves.com</p>
                            </div>
                            {/* Contact Item 3 */}
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-xl text-green-500" />
                                <p className="text-lg">Ridewaves, 123 Main St, City, Country</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="mt-10 grid grid-cols-1 w-full">
                        <Image
                            src={temp2}// Replace with real images
                            alt="Ride image"

                            className="rounded-lg w-full"
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default About;
