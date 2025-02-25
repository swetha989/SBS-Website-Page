import Image from "next/image"
import * as motion from "motion/react-client"
import { BorderBeam } from "./magicui/border-beam"

const clients = [
  {
    name: "Bio Rad",
    logo: "/clients/bio-rad.png",
  },
  {
    name: "Metropolitan",
    logo: "/clients/metropolitan.png",
  },
  {
    name: "WD",
    logo: "/clients/western-digital.png",
  },
  {
    name: "Boeing",
    logo: "/clients/boeing.png",
  },
  {
    name: "Unilever",
    logo: "/clients/unilever.png",
  },
  {
    name: "AMD",
    logo: "/clients/amd.png",
  },
  {
    name: "Applied Materials",
    logo: "/clients/applied-materials.png",
  },
  {
    name: "Tesla",
    logo: "/clients/tesla.png",
  },
  {
    name: "Leeyo",
    logo: "/clients/leeyo.png",
  },
  {
    name: "Motorola",
    logo: "/clients/motorola.png",
  },
  {
    name: "Office Max",
    logo: "/clients/officemax.png",
  },
  {
    name: "Stryker",
    logo: "/clients/stryker.png",
  },
  {
    name: "Roche",
    logo: "/clients/roche.png",
  },
  {
    name: "Shane Co",
    logo: "/clients/shane.png",
  },
  {
    name: "SMUD",
    logo: "/clients/smud.png",
  },
  {
    name: "Shell",
    logo: "/clients/shell.png",
  },
]

export default function ClientGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {clients.map((client, index) => (
        <motion.div key={index} className="transform perspective-1000 group"
        whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <div className="relative h-32 shadow-xl rounded-xl transform skew-x-[-20deg]">
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
          <BorderBeam duration={5} size={100}/>
          </div>
        </motion.div>
      ))}
    </div>
  )
}