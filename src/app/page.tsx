import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings, Building2, Users } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fff8]">
      {/* Company Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">COMPANY OVERVIEW</h1>
            <p className="text-muted-foreground leading-relaxed">
              SBS Corp is a professional IT product solution and consulting company founded in 2005 in the state of
              California. The company is rapidly growing and is specialized in providing ERP, SCM, PLM and MOM
              solutions. SBS offers unique implementation services for Dassault Systemes and SAP Products out of our
              offices in US, Europe, and Asia Pacific.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help our customers manage, change, and transform their businesses through high-quality,
              efficient, and cost reducing consulting services using the latest proven technologies.
            </p>
            <Button className="bg-[#7ac142] hover:bg-[#68a438] text-white">FIND OUT MORE</Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/hero-image.png"
              alt="Business meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 bg-zinc-800 text-white">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#7ac142] flex items-center justify-center">
                <Settings className="h-8 w-8" />
              </div>
              <p className="text-sm">
                Founded in 2005 Team with over 250k + Days of expertise in implementing and integrating IT Solutions in
                ERP, MOM and PLM domains globally.
              </p>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-800 text-white">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#7ac142] flex items-center justify-center">
                <Building2 className="h-8 w-8" />
              </div>
              <p className="text-sm">
                US, India, UK, Singapore, Abhu Dhabi, Australia, Malaysia, South America and Brazil.
              </p>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-800 text-white">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#7ac142] flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <p className="text-sm">Employees globally 150+ US/NA Region, 200+ Asia Pacific, 50+ EMEA.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision Mission Values Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <VisionCard
            title="OUR VISION"
            content="Our vision is to offer quality services in the fields of Application Development, Enterprise Integration, Business Consulting, and solutions for small, medium, and large businesses to meet their IT & Consulting needs all under one-roof. SBS Corp always focuses on offering value-added services critical to the success of our clients' businesses."
          />
          <VisionCard
            title="OUR MISSION"
            content="Our mission is to be a specialized Next Generation IT services provider by offering the best in class portfolio of services to our clients. We want to become a global one stop shop to meet all our customers' requirements – offering a combination of simple, cost and time effective benefits to the client."
          />
          <VisionCard
            title="OUR VALUES"
            content="Drive business transformation for our clients with a firm commitment towards customer sovereignty, passion for excellence, continuous innovation, transparency and integrity, and people orientation."
          />
        </div>
      </section>

      {/* Why SBS Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">WHY SBS</h2>
        <div className="grid gap-8">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-800 text-white">
                <h3 className="text-2xl font-semibold mb-4">The Experience</h3>
                <p className="leading-relaxed">
                  SBS&apos; consulting services are focused on the organization&apos;s present capabilities and its desired goals.
                  We believe in finding the right balance that unleashes the potential of optimizing the enterprise wide
                  processes and solutions.
                </p>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src="/pattern-1.png"
                  alt="Target practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="relative aspect-video lg:aspect-auto order-2 lg:order-1">
                <Image
                  src="/pattern-2.png"
                  alt="Digital transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-zinc-800 text-white order-1 lg:order-2">
                <h3 className="text-2xl font-semibold mb-4">The Expertise</h3>
                <p className="leading-relaxed">
                  SBS is proud of its dedicated and professional competences in PLM, ERP, SCM and MOM solutions with
                  keen focus on cutting edge Mobile and Web technologies. Our expert consultants and architects are
                  aptly chosen to meet the goals of our clients.
                </p>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-800 text-white">
                <h3 className="text-2xl font-semibold mb-4">The Experience</h3>
                <p className="leading-relaxed">
                  SBS&apos; consulting services are focused on the organization&apos;s present capabilities and its desired goals.
                  We believe in finding the right balance that unleashes the potential of optimizing the enterprise wide
                  processes and solutions.
                </p>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src="/pattern-3.png"
                  alt="Target practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">THE LEADERSHIP GROUP</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LeadershipCard
            image="./globe.svg"
            name="Venkat Kalyan Chivukula"
            title="Global Chief Executive Officer (CEO)"
            description="As the Global CEO, Kalyan is responsible for shaping SBS Corp's global strategy, defining the strategic direction..."
          />
          <LeadershipCard
            image="./globe.svg"
            name="Sreenivasa Seelam"
            title="Chief Financial Officer (CFO) & Managing Partner"
            description="Srini is a key executive of SBS Corp and plays crucial role in overseeing the financial management of the company."
          />
          <LeadershipCard
            image="./globe.svg"
            name="Anil R Thummala"
            title="Chief Information Officer (CIO) & Managing Partner"
            description="Anil is an executive member of SBS Corp and is responsible for aligning IT strategies with business goals..."
          />
        </div>
      </section>
    </main>
  )
}

function VisionCard({ title, content }: { title: string; content: string }) {
  return (
    <Card className="relative border-dashed">
      <div className="absolute -top-3 left-4 right-4 h-12 bg-[#7ac142] rounded-md flex items-center justify-center text-white font-semibold">
        {title}
      </div>
      <div className="pt-12 p-6">
        <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
      </div>
    </Card>
  )
}

function LeadershipCard({
  image,
  name,
  title,
  description,
}: {
  image: string
  name: string
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden bg-zinc-800 text-white">
      <div className="relative aspect-[4/3]">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="bg-[#f8fff8] text-zinc-800 py-1 px-3 rounded text-center">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <p className="text-sm font-medium text-center">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <Button variant="link" className="text-[#7ac142] p-0 h-auto">
          Read More
        </Button>
      </div>
    </Card>
  )
}

