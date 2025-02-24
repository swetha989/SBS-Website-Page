import Image from "next/image"

const partners = [
  {
    name: "Value Solutions Partner",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "USA Engineering",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Persistent",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "SAP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
]

export default function PartnerSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="relative p-4 border border-dashed border-gray-300 rounded-lg transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div className="relative h-32">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

