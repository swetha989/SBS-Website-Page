import Image from "next/image"

export default function ServicesPage3() {
    return (
        <main className="min-h-screen bg-[#b7e1f1]">
            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            <span className="text-gray-800">ON DEMAND</span> <span className="text-[#0078d4]">SERVICES</span>
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                SBS leverages its mature delivery model (Offsite/Offshore/Onsite) to serve
                                customers seeking specific services. Our on-demand services range from
                                addressing technical needs to providing enterprise-wide application support. We
                                offer consulting services in flexible packages to ensure cost-effective solutions and
                                incident-based changes.
                            </p>
                        </div>
                        <button className="px-8 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
                            Explore
                        </button>
                    </div>
                    <div className="relative h-[500px] rounded-lg shadow-md overflow-hidden">
                        <Image
                            src="/service3.png"
                            alt="Digital transformation visualization"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2890e0] opacity-20"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

