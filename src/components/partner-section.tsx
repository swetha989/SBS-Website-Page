import * as motion from "motion/react-client"
import Image from "next/image"

const partners = [
  {
    name: "Value Solutions Partner",
    logo: "/partners/dassault.png",
  },
  {
    name: "USA Engineering",
    logo: "/partners/usa-engg.png",
  },
  {
    name: "Persistent",
    logo: "/partners/persistent.png",
  },
  {
    name: "SAP",
    logo: "/partners/sap.png",
  },
]

export default function PartnerSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          className="relative p-4 border border-dashed border-gray-300 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-32">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

