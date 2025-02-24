import Image from "next/image"

const clients = [
  {
    name: "Bio Rad",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Metropolitan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "WD",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Boeing",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Unilever",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "AMD",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Applied Materials",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Tesla",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Leeyo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Motorola",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Office Max",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Stryker",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Roche",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Shane Co",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "SMUD",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
  {
    name: "Shell",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lsPMT8sXLnDUgxD6BswTsZkxhIy9UP.png",
  },
]

export default function ClientGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {clients.map((client, index) => (
        <div key={index} className="transform perspective-1000 group">
          <div className="relative h-32 bg-black transform skew-x-[-20deg] transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-0 flex items-center justify-center transform skew-x-[20deg]">
              <div className="w-24 h-24 relative">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

