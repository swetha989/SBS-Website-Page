"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Home, MessageSquare, Mail } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="w-full bg-[#f5fbf5] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get in touch with us</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Home className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600 mb-2">SBS Corp</p>
                <p className="text-gray-600 text-sm mb-4">
                  Headquarters : 5757 Flewellen oaks lane, Suite 704,
                  <br />
                  Fulshear, TX-77441. USA.
                </p>
                <p className="text-gray-600 text-sm">
                  Unit No: 406, Aparna Green, Opposite Golf View,
                  <br />
                  Nanakramguda, Hyderabad, 500032, Telangana, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Phone Number</h3>
                <p className="text-gray-600">+91 9912469307 (IND) / +1 281-477-6467 (USA)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Email Address</h3>
                <p className="text-gray-600">info@mysbscorp.com</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-8">
              If you have any assistance, please contact us through phone or email, and we will get back to you as soon
              as possible.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-[#3386d3af]">
            <form className="space-y-4">
              <div className="space-y-2">
                <Input type="text" placeholder="Your Name" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Input type="tel" placeholder="Phone Number" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Textarea placeholder="Message" className="min-h-[120px] bg-white" />
              </div>

              <Button className="w-full bg-[#36464e] text-white hover:bg-[#5394df]">SEND MESSAGE</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

