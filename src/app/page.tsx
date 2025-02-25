import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings, Building2, Users } from "lucide-react"
export default function Page() {
  return (
    <main className="min-h-screen bg-[#b7e1f1]">
      {/* Company Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">COMPANY OVERVIEW</h1>
            <p className="text-muted-foreground leading-relaxed">
            SBS Corp is a professional IT product solution and consulting company founded in 2005 in the state of California. The company is rapidly growing and is specialized in providing ERP, SCM, PLM and MOM solutions. SBS offers unique implementation services for Dassault Systemes and SAP Products out of our offices in US, Europe, and Asia Pacific. Our mission is to help our customers manage, change, and transform their businesses through high-quality, efficient, and cost reducing consulting services using the latest proven technologies. SBS provides world class consulting services by seasoned professionals and end-to-end business solutions which help customers drive their immediate and long-term business goals and achieve their long term vision. SBS has been supporting customers across the globe and across different industries in selecting, implementing and maintaining the best PLM, ERP and MOM product solutions available.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help our customers manage, change, and transform their businesses through high-quality,
              efficient, and cost reducing consulting services using the latest proven technologies.
            </p>
            <Button className="bg-[rgb(61,165,250)] hover:bg-[rgb(61,165,250)] text-white">FIND OUT MORE</Button>
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
              <div className="h-16 w-16 rounded-full bg-[rgb(61,165,250)] flex items-center justify-center">
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
              <div className="h-16 w-16 rounded-full bg-[rgb(61,165,250)] flex items-center justify-center">
                <Building2 className="h-8 w-8" />
              </div>
              <p className="text-sm">
                US, India, UK, Singapore, Abhu Dhabi, Australia, Malaysia, South America and Brazil.
              </p>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-800 text-white">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[rgb(61,165,250)] flex items-center justify-center">
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
            content="Our vision is to offer quality services in the fields of Application Development, Enterprise Integration, Business Consulting, and solutions for small, medium, and large businesses to meet their IT & Consulting needs all under one-roof.
SBS Corp always focuses on offering value-added services critical to the success of our clients’ businesses. We provide our customers with the competitive advantage through the adoption of our core technical & domain expertise and capabilities.."
          />
          <VisionCard
            title="OUR MISSION"
            content="Our mission is to be a specialized Next Generation IT services provider by offering the best in class portfolio of services to our clients.
We want to become a global one stop shop to meet all our customers’ requirements – offering a combination of simple, cost and time effective benefits to the client.
To achieve this, we encourage each and every employee within our organization to imbibe the spirit of entrepreneurship. We strive to deliver quality services by comprehending our client and employee needs through close interaction and by creating a global network.."
          />
          <VisionCard
            title="OUR VALUES"
            content="Drive business transformation for our clients with a firm commitment towards customer sovereignty, passion for excellence, continuous innovation, transparency and integrity, and people orientation.
To ensure continued customer satisfaction, we provide excellent automation products and appertaining services, such as our extensive technical support, high level of technical knowledge and consultancy, effective training, and an enthusiastic sales team.
It is our long-term policy to ensure qualitative and quantitative growth of our business, our international network, and our products, while maintaining the spirit of our team.."
          />
        </div>
      </section>

      {/* Why SBS Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">WHY SBS</h2>
        <div className="grid gap-8">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 bg-zinc-800 text-white">
                <h3 className="text-3xl font-semibold mb-12">The Experience</h3>
                <p className="leading-relaxed">
                SBS’ consulting services are focused on the organization’s present capabilities and its desired goals. We believe in finding the right balance that unleashes the potential of optimizing the enterprise wide processes and solutions.
                Our decades of experience come from the diversified exposure of handling organizations across different industries. We have dealt with organizations of various sizes and structures. It further elaborates that our effectiveness stems from a real-time hands on experience.
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
            <div className="grid lg:grid-cols-2">
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
                SBS is proud of its dedicated and professional competences in PLM, ERP, SCM and MOM solutions with keen focus on cutting edge Mobile and Web technologies. Our expert consultants and architects are aptly chosen to meet the goals of our clients. We possess expertise not only in designing solutions but implementing and maintaining them as well. We have taken the scope of our services to another level by providing training services so that our customers develop the self-sustaining Run and Maintain operations.
                </p>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 bg-zinc-800 text-white">
                <h3 className="text-3xl font-semibold mb-6">The Engagement</h3>
                <p className="leading-relaxed">
                Accessibility, the ease of use customization in offerings, and the attitude to maintain quality without compromising makes SBS a desirable consulting partner. If your organization is running into IT challenges whether it is Data or a Business Process, please contact SBS to resolve your challenges. Our experts will contact you and provide a customized solution that will enable you to tackle your business issues with absolute aplomb. Our Engagement Managers can be contacted at bizdev@mysbscorp.com
                </p>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src="/pattern-3.jpg"
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
      <section className="container mx-auto px-4 py-12 ">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LeadershipCard
            image="/kalyan.jpg"
            name="Venkat Kalyan Chivukula"
            title="Global Chief Executive Officer (CEO)"
            description="As the Global CEO, Kalyan is responsible for shaping SBS Corp's global strategy, defining the strategic direction..."
          />
          <LeadershipCard
            image="/srinivas.jpg"
            name="Sreenivasa Seelam"
            title="Chief Financial Officer (CFO) & Managing Partner"
            description="Srini is a key executive of SBS Corp and plays crucial role in overseeing the financial management of the company."
          />
          <LeadershipCard
            image="/anil.jpg"
            name="Anil R Thummala"
            title="Chief Information Officer (CIO) & Managing Partner"
            description="Anil is an executive member of SBS Corp and is responsible for aligning IT strategies with business goals..."
          />
          <LeadershipCard
            image="/alekhya.jpg"
            name="Alekhya Arnepalli"
            title="Director of HR & Operations"
            description="Alekhya is responsible for leading and managing the recruitment and onboarding process, engaging in
professional development programs, and handling HR compliance, policies, and benefits administration
to ensure legal and regulatory adherence. Additionally, she implements efficient operational strategies
to enhance overall organizational efficiency and effectiveness."
          />
          <LeadershipCard
            image="/praneeth.jpg"
            name="Praneeth Arnepalli"
            title="Technical Product Lead"
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
      <div className="absolute -top-3 left-4 right-4 h-12 bg-[rgb(61,165,250)] rounded-md flex items-center justify-center text-white font-semibold">
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
    <Card className="overflow-hidden bg-zinc-800 text-white items-center">
      <div className="relative aspect-[4/3] px-[10px]">
        <Image src={image || "/placeholder.svg"} alt={name} width={400} height={200} className="object-fill items-center" />
      </div>
      <div className="p-4 space-y-2">
        <div className="bg-[#f8fff8] text-zinc-800 py-1 px-3 rounded text-center">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <p className="text-sm font-medium text-center">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <Button variant="link" className="text-[rgb(61,165,250))] p-0 h-auto">
        </Button>
      </div>
    </Card>
  )
}

