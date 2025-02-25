// import Image from "next/image"
import ServicesPage1 from "@/components/service1"
import ServicesPage2 from "@/components/service2"
import ServicesPage3 from "@/components/service3"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <ServicesPage1 />
        </CarouselItem>
        <CarouselItem>
          <ServicesPage2 />
        </CarouselItem>
        <CarouselItem>
          <ServicesPage3 />
        </CarouselItem>
        <CarouselItem>
          <ServicesPage1 />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
