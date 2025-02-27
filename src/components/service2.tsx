import Image from "next/image"

export default function ServicesPage2() {
  return (
    <main className="min-h-screen bg-[#b7e1f1]">
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 justify-between">
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
              <div className="flex space-x-4">
                <Image src="/sap.png" alt="sap" width={50} height={50} className="rounded-full" />
                <Image src="/java.png" alt="java" width={50} height={50} className="rounded-full" />
                <Image src="/hadoop.png" alt="hadoop" width={50} height={50} className="rounded-full" />
                <Image src="/nt.png" alt="nt" width={50} height={60} className="rounded-full" />
                <Image src="/etl.png" alt="etl" width={50} height={50} className="rounded-full" />
                <Image src="/data warehouse.png" alt="data warehouse" width={60} height={50} className="rounded-full" />
                <Image src="/data admin.png" alt="data admin" width={90} height={70} className="rounded-full" />
                <Image src="/delmia.png" alt="delmia" width={90} height={50} className="rounded-full" />
                <Image src="/cpp.png" alt="cpp" width={60} height={50} className="rounded-full" />
              </div>
            </div>
            <button className="px-8 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
              Explore
            </button>
          </div>
          <div className="relative h-[700px] w-[522px] rounded-lg shadow-md overflow-hidden">
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

