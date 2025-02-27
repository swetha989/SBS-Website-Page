"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Factory1() {
    // const [showPopup, setShowPopup] = useState(false);

    // const handleHeaderClick = () => {
    //     setShowPopup(true);
    // };

    // const closePopup = () => {
    //     setShowPopup(false);
    // };

    return (
        <main className="min-h-screen bg-[#b7e1f1]">
            {/* NavBar */}
            {/* ...existing code... */}

            {/* Space between NavBar and Header */}
            <div className="h-6"></div>

            {/* Header */}
            <header className="bg-[#86c2e6] container mx-auto px-12 py-6 relative">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center cursor-pointer">
                        <Image src="/icon1.png" alt="factory" width={100} height={100} className="mr-4" />
                        <h1 className="text-4xl font-bold text-grey-700">FACTORY OF THE FUTURE</h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-2 bg-blue text-black rounded-md shadow-md hover:bg-gray-100">
                            Filters <ChevronDown className="inline-block ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Manufacturing Execution Systems</DropdownMenuItem>
                            <DropdownMenuItem>Product Development Management</DropdownMenuItem>
                            <DropdownMenuItem>Advanced Manufacturing</DropdownMenuItem>
                            <DropdownMenuItem>SAP Integration Solutions</DropdownMenuItem>
                            <DropdownMenuItem>Cloud Deployment Solutions</DropdownMenuItem>
                            <DropdownMenuItem>Data Analytics</DropdownMenuItem>
                            <DropdownMenuItem>Finance Analytics</DropdownMenuItem>
                            <DropdownMenuItem>IOT Big Data</DropdownMenuItem>
                            
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            <span className="text-gray-700">Adapting to a New Era Of Manufacturing</span>
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Adapting to a New Era of Manufacturing

                                Innovation, disruption, and global connectivity are transforming how manufacturers
                                operate in the experience-driven economy.
                                Manufacturers face increasing competition, unexpected challenges, and rising
                                consumer demands. By leveraging a world-class business platform, your company
                                can digitally transform its operations and stay ahead of these evolving trends.
                            </p>
                        </div>
                        <button className="px-8 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
                            Explore
                        </button>
                    </div>
                    <div className="relative h-[500px] rounded-lg shadow-md overflow-hidden">
                        <Image
                            src="/factory.png"
                            alt="factory of the future"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2890e0] opacity-20"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}

