// import Image from "next/image"
import ClientGrid from "@/components/client-grid"
import CertificationSection from "@/components/certification-section"
import PartnerSection from "@/components/partner-section"

export default function AllPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Preview Image Section
      <div className="w-full h-[300px] relative bg-[#f0f8f0]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png"
          alt="Preview"
          fill
          className="object-contain"
          priority
        />
      </div> */}

      <div className="container mx-auto px-4 py-16 space-y-20">
        <section>
          <h2 className="text-center text-2xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            OUR CLIENTS
          </h2>
          <ClientGrid />
        </section>

        <section>
          <h2 className="text-center text-2xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            OUR CERTIFICATIONS
          </h2>
          <CertificationSection />
        </section>

        <section>
          <h2 className="text-center text-2xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            OUR PARTNERS
          </h2>
          <PartnerSection />
        </section>
      </div>
    </main>
  )
}

