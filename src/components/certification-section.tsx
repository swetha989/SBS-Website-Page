import Image from "next/image"

const certifications = [
  {
    name: "National Minority Supplier Development Council",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Women's Business Enterprise",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "HUB Program",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
]

export default function CertificationSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div className="relative h-40">
            <Image
              src={cert.logo || "/placeholder.svg"}
              alt={`${cert.name} certification`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

