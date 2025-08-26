"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  FileText,
  Wrench,
  Wind,
  Sparkles,
  Headphones,
  CheckCircle,
  ArrowRight,
  Star,
  Home,
  Clock,
  TrendingUp,
  X,
  Car,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    address: "",
    unitNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+65 XXXX XXXX"
            required
          />
        </div>
        <div>
          <Label htmlFor="propertyType">Property Type</Label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Select property type</option>
            <option value="Condo">Condo</option>
            <option value="HDB">HDB</option>
            <option value="Landed">Landed</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Label htmlFor="address">Property Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. 123 Orchard Road"
            required
          />
        </div>
        <div>
          <Label htmlFor="unitNumber">Unit Number</Label>
          <Input
            id="unitNumber"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            placeholder="e.g. #12-34"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your property and rental management needs..."
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
        Submit Inquiry
      </Button>
    </form>
  );
}

export default function EverLeaseLanding() {
  const [faqOpenStates, setFaqOpenStates] = useState(Array(6).fill(false));

  const toggleFaq = (index) => {
    setFaqOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <Image
                src="https://content.jdmagicbox.com/comp/ernakulam/i9/0484px484.x484.120712144351.x2i9/catalogue/ericsson-india-pvt-ltd-ernakulam-0c57psbk47-250.jpg"
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">แท็กซี่ไทย</h1>
              <p className="text-xs text-gray-600">อุบลราชธานี</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="border-yellow-300 text-yellow-800"
            >
              บริการแท็กซี่อุบลราชธานี – ตลอด 24 ชั่วโมง
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              เดินทางมั่นใจ อยู่ร่วมกับเรา
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              บริการแท็กซี่ บริการรถตู้ และเหมารถส่วนตัว ครอบคลุม 25
              อำเภอในจังหวัดอุบลราชธานี พร้อมส่งถึงสนามบิน สถานีรถไฟ
              และทั่วประเทศไทย ทีมงานมืออาชีพ พร้อมรับ-ส่ง 24 ชม. ติดต่อ
              095-6064990 หรือ 084-3269865
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0956064990" className="block w-full">
                <Button
                  size="lg"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-6 text-white"
                >
                  จองบริการเลย
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 border-yellow-600 text-yellow-700"
                onClick={() =>
                  window.open("https://line.me/ti/p/0956064990", "_blank")
                }
              >
                แอด LINE
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>รถใหม่สะอาด ปลอดภัย ประกันภัยทุกเที่ยว</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>คนขับมืออาชีพ ตรวจสอบประวัติ + GPS ทุกคัน</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>พร้อมบริการตลอด 24 ชั่วโมง</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://scontent.fcgk25-1.fna.fbcdn.net/v/t39.30808-6/500890683_122131880756783761_4892513213751476058_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FzkOVYxIMz0Q7kNvwHHG7_l&_nc_oc=Adm53wQ2jzlYLxkXqSnUlISTnBlTx9jPad2FlamnmNFBYWZBdpbaK01H0OagoPuaAKU&_nc_zt=23&_nc_ht=scontent.fcgk25-1.fna&_nc_gid=kbF_8JaaprczTiXLIzR49A&oh=00_AfSW9FFBjLfF2qlZ7OIziqK_8f53FwsSibe3vH32KMuu1g&oe=68914299"
              alt="แท็กซี่อุบล พร้อมคนขับมืออาชีพ"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    บริการกว่า 10 ปี
                  </p>
                  <p className="text-sm text-gray-600">
                    ครอบคลุม 25 อำเภอ อุบลฯ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ความประทับใจจากผู้โดยสาร
            </h2>
            <p className="text-xl text-gray-600">
              เสียงจริงจากลูกค้าที่ใช้บริการแท็กซี่อุบลฯ
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ใช้บริการหลายครั้งแล้วค่ะ คนขับสุภาพ รถสะอาด แถมมารับตรงเวลาเสมอ ประทับใจมาก!",
                author: "คุณสุนิสา",
                property: "จากสนามบินไป ม.อุบล",
              },
              {
                quote:
                  "เดินทางไปศรีสะเกษแบบเหมารถ สะดวก รวดเร็ว คนขับช่วยยกกระเป๋าและพูดจาดีมากครับ",
                author: "คุณอานนท์",
                property: "เดินทางระหว่างจังหวัด",
              },
              {
                quote:
                  "แอดไลน์จองง่ายมาก ราคาเป็นมิตร ไม่ต้องต่อ คนขับไว้ใจได้ ติด GPS ตลอดทาง",
                author: "คุณกมลพร",
                property: "เรียกรับที่ บขส. อุบล",
              },
              {
                quote:
                  "ใช้แท็กซี่คันใหญ่ 7 ที่นั่งไปส่งครอบครัวที่สนามบิน ประทับใจ บริการดีเยี่ยม",
                author: "คุณวินัย",
                property: "ส่งสนามบินอุบลฯ",
              },
              {
                quote:
                  "แนะนำเลยค่ะ ไปต่างอำเภอก็รับบริการ ราคาชัดเจน มีใบเสร็จให้ด้วย",
                author: "คุณสุรีย์พร",
                property: "อำเภอเดชอุดม → อุบลฯ",
              },
              {
                quote:
                  "คนขับใจดีมาก ๆ ครับ ช่วยแนะนำสถานที่เที่ยวในอุบลฯ ด้วย ขอบคุณมาก ๆ ครับ",
                author: "คุณธีรภัทร",
                property: "ทัวร์รอบเมืองอุบลฯ",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.property}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4 min-w-max">
                {[
                  {
                    quote:
                      "ใช้บริการหลายครั้งแล้วค่ะ คนขับสุภาพ รถสะอาด แถมมารับตรงเวลาเสมอ ประทับใจมาก!",
                    author: "คุณสุนิสา",
                    property: "จากสนามบินไป ม.อุบล",
                  },
                  {
                    quote:
                      "เดินทางไปศรีสะเกษแบบเหมารถ สะดวก รวดเร็ว คนขับช่วยยกกระเป๋าและพูดจาดีมากครับ",
                    author: "คุณอานนท์",
                    property: "เดินทางระหว่างจังหวัด",
                  },
                  {
                    quote:
                      "แอดไลน์จองง่ายมาก ราคาเป็นมิตร ไม่ต้องต่อ คนขับไว้ใจได้ ติด GPS ตลอดทาง",
                    author: "คุณกมลพร",
                    property: "เรียกรับที่ บขส. อุบล",
                  },
                  {
                    quote:
                      "ใช้แท็กซี่คันใหญ่ 7 ที่นั่งไปส่งครอบครัวที่สนามบิน ประทับใจ บริการดีเยี่ยม",
                    author: "คุณวินัย",
                    property: "ส่งสนามบินอุบลฯ",
                  },
                  {
                    quote:
                      "แนะนำเลยค่ะ ไปต่างอำเภอก็รับบริการ ราคาชัดเจน มีใบเสร็จให้ด้วย",
                    author: "คุณสุรีย์พร",
                    property: "อำเภอเดชอุดม → อุบลฯ",
                  },
                  {
                    quote:
                      "คนขับใจดีมาก ๆ ครับ ช่วยแนะนำสถานที่เที่ยวในอุบลฯ ด้วย ขอบคุณมาก ๆ ครับ",
                    author: "คุณธีรภัทร",
                    property: "ทัวร์รอบเมืองอุบลฯ",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg w-80 flex-shrink-0"
                  >
                    <CardContent className="p-6">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-gray-600">
                          {testimonial.property}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                ← ปัดซ้ายเพื่ออ่านรีวิวเพิ่มเติม →
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Our Activities
          </h2>
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {/* Activity 2 */}
            <div className="min-w-[300px] max-w-sm snap-center bg-gray-100 rounded-2xl shadow-md p-4 flex-shrink-0">
              <img
                src="https://scontent.fcgk25-1.fna.fbcdn.net/v/t39.30808-6/524285024_122142487982783761_6006853438433045073_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R-wHTTKDLFoQ7kNvwHMeTfW&_nc_oc=Adli3MUMBFrBzn_E2w4JAs4Xt8sXBgq4HO2uInYVQ7RvdRXAkKemVk5El6siFNtDFik&_nc_zt=23&_nc_ht=scontent.fcgk25-1.fna&_nc_gid=igk1gjyvTIU7K3LH2pB5Tw&oh=00_AfQNHbdJ5ta3e0OLqqvvMxrDzVsmuj9AIte_gYJeoFtFzw&oe=689130D0"
                alt="Activity 2"
                className="rounded-xl object-cover w-full h-48 mb-4"
              />
              <p className="text-sm text-gray-700">
                📍 รับผู้โดยสารที่ Cafe Amazon ตอนดึก 🕙
                <br />
                แท็กซี่อุบลพร้อมบริการ 24 ชม.
              </p>
            </div>

            {/* Activity 3 */}

            <div className="min-w-[300px] max-w-sm snap-center bg-gray-100 rounded-2xl shadow-md p-4 flex-shrink-0">
              <img
                src="https://scontent.fcgk25-1.fna.fbcdn.net/v/t39.30808-6/519682866_122141462882783761_5147906355185425107_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WuYmuU7hbhoQ7kNvwFbZnNQ&_nc_oc=Adm2magplRIotNgwPdxMD5AfbfWUo6PPm7iI2zKrdfmggPKwiAcR7kAZ0GmLwgMJ0_k&_nc_zt=23&_nc_ht=scontent.fcgk25-1.fna&_nc_gid=_C-qwg7FGrq3sui7WdbR3Q&oh=00_AfQV8fuvduKiNvMo3V90FIyFf4QNpX5cp7WlyHSK7SL7DA&oe=68912B52"
                alt="Activity 4"
                className="rounded-xl object-cover w-full h-48 mb-4"
              />
              <p className="text-sm text-gray-700">
                🙏 เช้านี้ไปรับลูกค้าร่วมทำบุญตักบาตร <br />
                บริการด้วยใจ แท็กซี่อุบลพร้อมพาไปทุกกิจกรรม 💛
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Taxi Branding */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Taxi อุบลราชธานี</h3>
                  <p className="text-xs text-gray-400">
                    เรียกรถแท็กซี่ได้ 24 ชั่วโมงทั่วไทย
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                บริการแท็กซี่ แท็กซี่มิเตอร์ รถเหมา เหมารถส่วนตัว ราคามาตรฐาน
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">บริการของเรา</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>แท็กซี่ในเมืองอุบลฯ</li>
                <li>เหมารถไปต่างจังหวัด</li>
                <li>บริการสนามบิน / สถานีรถไฟ</li>
                <li>รถ 4 ที่นั่ง / 7 ที่นั่ง / รถตู้</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  โทร: <span className="text-yellow-400">095-6064990</span>
                </li>
                <li>
                  โทร: <span className="text-yellow-400">084-3269865</span>
                </li>
                <li>
                  LINE: <span className="text-yellow-400">แสกน QR ด้านขวา</span>
                </li>
              </ul>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <h4 className="font-semibold mb-4">แอดไลน์ด่วน</h4>
              <img
                src="https://scontent.fcgk25-1.fna.fbcdn.net/v/t39.30808-6/496121482_122128785920783761_4638346812363659630_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D_3m4L-XnWEQ7kNvwF28C5I&_nc_oc=AdkZ3VJDMjS7w9fQeiTMmGSQq2EbIYt_S-eA-ZJml88CuMUlP7UV4JrQczg1iiU_11Q&_nc_zt=23&_nc_ht=scontent.fcgk25-1.fna&_nc_gid=4MlBhlsXNLbKOPe0R6WMCQ&oh=00_AfQiSROagTo6LIGI2xTEHrwmOAi3AAoepgH6nc-bKgDgLw&oe=68912E76" // ⬅️ Simpan file QR code sebagai gambar ini
                alt="Line QR Taxi Ubon"
                className="mx-auto w-32 h-32 rounded"
              />
              <p className="text-xs text-gray-400 mt-2">
                LINE ID: สแกนเพื่อจอง
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Taxi Ubon Ratchathani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
