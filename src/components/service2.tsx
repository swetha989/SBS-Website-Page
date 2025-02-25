import Image from "next/image"

export default function ServicesPage2() {
  return (
    <main className="min-h-screen bg-[#b7e1f1]">
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-gray-800">CONSULTING</span> <span className="text-[#0078d4]">SERVICES</span>
            </h1>
            <div className="space-y-4 text-gray-700">
              <p>
              SBS experts help you define your top business requirements and add value by providing solutions via our extensive industry know how. Our team designs and builds your solution according to the needs of your business processes. We recommend the technology that most fits your needs and goals, ensuring seamless integration with your application landscape.
              </p>
              <p>
              The key technologies that our consultants work with are..
              </p>
            </div>
            <button className="px-8 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
              Explore
            </button>
          </div>
          <div className="relative h-[500px] rounded-lg shadow-md overflow-hidden">
            <Image
              src="/services2.png"
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

