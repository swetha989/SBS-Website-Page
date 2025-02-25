"use client";

import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: "mdslite",
    name: "MDSLite",
    image: "/products/mdslite.png",
  },
  {
    id: "flexmobex",
    name: "FLEXMOBEX",
    image: "/products/flexmobex.png",
  },
  {
    id: "itech",
    name: "ITECH MOBILE",
    image: "/products/itech.png",
  },
  {
    id: "flexpod",
    name: "FlexPod",
    image: "/products/flexpod.png",
  },
  {
    id: "flexutility",
    name: "FlexUtility",
    image: "/products/flexutility.png",
  },
  {
    id: "transport",
    name: "Transport Migration Utility",
    image: "/products/transport.png",
  },
  {
    id: "estate",
    name: "Real estate management integration",
    image: "/products/estate.png",
  },
];

export default function ProductComponent() {
  return (
    <Tabs defaultValue="mdslite">
      <TabsList className=" h-fit text-black flex justify-center">
        {products.map((product) => (
          <TabsTrigger
            key={product.id}
            value={product.id}
            className="flex items-center space-x-2 px-4 py-2 text-white"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={50}
              height={50}
            />
            <span>{product.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="mdslite" className="space-y-4 mt-6">
        <div className="grid md:grid-cols-2 gap-8 text-xl">
          <div>
            <Image
              src="/products/mds/ichi.png"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              As global opportunities expand and adoption of the “Any Product,
              Any Plant” manufacturing strategy increases, winning in today’s
              globally competitive marketplace requires partnering with a proven
              company that helps you leverage industry best practices while
              supporting process flexibility. Our MOM solution for discrete
              manufacturers delivers visibility and control across your
              enterprise manufacturing operations and supply chain, helping you
              drive global best practice and continuous improvement while
              maximizing asset utilization: • Easily adaptable to the specific
              requirements of different industrial processes •The highly
              scalable platform delivers powerful capabilities and enables
              manufacturers to combine production efficiency with production
              quality and production visibility to optimize their processes and
              significantly reduce their time-to-market. •MES capabilities and
              out-of-the-box features designed to support the unique processes
              and requirements of sectors executing sequential discrete
              manufacturing functions in order to produce the desired product,
              particularly: Complex Assembly Manufacturing (high complexity, low
              volume) Job Shop Manufacturing (high complexity, low volume)
              Automated Repetitive Manufacturing (configurable products, high
              volume) The MDSLite solution addresses 80% of today’s
              manufacturing challenges at 20% cost with an implementation via
              agile from Start to Run in 8 weeks • The solution helps to reduce
              costs and achieve the highest quality products while making
              compliance a by-product of excellent manufacturing processes
              Accelerate Innovation in the manufacturing domain with SBS’S
              MDSLite solution!
            </p>
          </div>
          <div>
            <Image
              src="/products/mds/ni.png"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              MDSLite Planning and Optimization Core enables Advanced planning,
              Scheduling and ptimization capabilities using Manufacturing
              Planner, Synchronized Resource Planner and Production cheduler
              roles and solution is built on top of DELMIA Ortems product.
              Anticipate plant capacity requirements by levelling the production
              plan vs load, scenario analysis, capacity, sales projections and
              new product introductions to ensure maximum throughput Deliver
              uninterrupted supply of finished goods through continuous
              synchronization of supplier production lines with customer
              assembly operations to reduce the risk of supply disruptions,
              material shortages and resulting enalties Maximize and balance
              production linesthat maximizes production utilization with
              optimized work order scheduling and sequencing while managing
              unplanned exceptions and events
            </p>
          </div>
          <div>
            <Image
              src="/products/mds/san.png"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              Order Dispatch by assigning the right priorities to orders it is
              guaranteed that the right orders are processed at the right time
              by the right employees. Order Execution through electronic and
              real time status updates and data collections, paperwork will be
              reduced and the agility of the organization will be increased.
              Electronic Work Instructions & Quality Data will ensure alignment
              with R&D requirements and regulations. Engineering changes will be
              immediately displayed on the floor and end to end traceability
              will be enabled. Downtime classification measures objective
              production losses and indirect labor. This information will boost
              the rganizations continuous improvement process
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="flexmobex" className="space-y-4 mt-6">
        <div className="grid md:grid-cols-2 gap-8 text-xl">
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              Our mission? To deliver exceptional cybersecurity education,
              combining hands-on training with expert knowledge. Whether
              you&apos;re starting from scratch or refining your skills, we
              prepare you to defend networks, applications, and organizations
              against the most advanced cyber threats. Regardless of their
              background, we ensure every student masters essential concepts
              with ease. Unlike traditional theory-heavy approaches, our focus
              is on practical, hands-on training using industry-relevant tools
              and evolving techniques. Our mission is to empower students with
              the skills and confidence needed to excel in the ever-changing
              world of cybersecurity.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              At Hackersdemy, we empower you to achieve the tech career you
              deserve with top-tier certifications, courses, and expert
              knowledge by providing immersive training with industry-standard
              applications ensuring real-world relevance. Our courses in Ethical
              Hacking, Advanced Penetration Testing, Cyber Forensics and SOC
              Analysis are designed to prepare you for the ever-evolving
              cybersecurity challenges across all domains.{" "}
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              As cyber threats become increasingly sophisticated, there is a
              growing demand for skilled professionals to protect organizations
              from potential attacks. At Hackersdemy, we provide courses that
              give you industry-ready skills, helping you to level up your
              cybersecurity knowledge and open the doors to a wide range of job
              opportunities within the ever-evolving world of cybersecurity.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="itech" className="space-y-4 mt-6">
        <div className="grid md:grid-cols-2 gap-8 text-xl">
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              Our mission? To deliver exceptional cybersecurity education,
              combining hands-on training with expert knowledge. Whether
              you&apos;re starting from scratch or refining your skills, we
              prepare you to defend networks, applications, and organizations
              against the most advanced cyber threats. Regardless of their
              background, we ensure every student masters essential concepts
              with ease. Unlike traditional theory-heavy approaches, our focus
              is on practical, hands-on training using industry-relevant tools
              and evolving techniques. Our mission is to empower students with
              the skills and confidence needed to excel in the ever-changing
              world of cybersecurity.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              At Hackersdemy, we empower you to achieve the tech career you
              deserve with top-tier certifications, courses, and expert
              knowledge by providing immersive training with industry-standard
              applications ensuring real-world relevance. Our courses in Ethical
              Hacking, Advanced Penetration Testing, Cyber Forensics and SOC
              Analysis are designed to prepare you for the ever-evolving
              cybersecurity challenges across all domains.{" "}
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.jpg"
              alt="image here"
              width={600}
              height={600}
            ></Image>
          </div>
          <div>
            <p>
              As cyber threats become increasingly sophisticated, there is a
              growing demand for skilled professionals to protect organizations
              from potential attacks. At Hackersdemy, we provide courses that
              give you industry-ready skills, helping you to level up your
              cybersecurity knowledge and open the doors to a wide range of job
              opportunities within the ever-evolving world of cybersecurity.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
