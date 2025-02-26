import Image from "next/image"
import * as motion from "motion/react-client"
// import { ShineBorder } from "./magicui/shine-border"
import { BorderBeam } from "./magicui/border-beam"

const certifications = [
  {
    name: "National Minority Supplier Development Council",
    logo: "/certs/nmsdc.png",
  },
  {
    name: "Women's Business Enterprise",
    logo: "/certs/wbe.png",
  },
  {
    name: "HUB Program",
    logo: "/certs/hub.png",
  },
]

export default function CertificationSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <motion.div
        key={index}
        className="bg-white rounded-lg shadow-md p-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-32 w-40 mx-auto">
            <Image
              src={cert.logo || "/placeholder.svg"}
              alt={`${cert.name} certification`}
              fill
              className="object-contain"
            />
          <BorderBeam duration={5} size={70}/>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

