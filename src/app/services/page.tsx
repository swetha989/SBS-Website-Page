import Image from "next/image"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#b7e1f1]">
      {/* Main Content */}0
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-gray-800">MANAGED</span> <span className="text-[#0078d4]">SERVICES</span>
            </h1>
            <div className="space-y-4 text-gray-700">
              <p>
                SBS has vast experience in supporting the complete suite of applications on a "follow the sun" model
                with resources in many countries spanning several continents.
                We have in depth experience in managing the complex range of services and programs of over 140
                enterprise wide business with varied technologies.
              </p>
              <p>
                One of the SBS senior managers has co-authored a handbook on "Managed Services" that demonstrates the
                complete methodology of planning and implementing best practices for a successful transition.
              </p>
            </div>
            <button className="px-8 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
              Explore
            </button>
          </div>
          <div className="relative h-[500px] rounded-lg shadow-md overflow-hidden">
            <Image
              src="/services.png"
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

