"use client";

import * as React from "react"
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"
import Portfolio1 from '/assets/portfolio1.png';
import Portfolio2 from '/assets/portfolio2.png';
import Github from '/assets/github.png';
import CLI_Lock1 from '/assets/cli_lock1.png';
import CLI_Lock2 from '/assets/cli_lock2.png';
import CLI_Lock3 from '/assets/cli_lock3.png';
import CLI_Lock4 from '/assets/cli_lock4.png';
import BCS from '/assets/bcs_characters.png';
import Clipboard1 from '/assets/clipboardScreenshot.jpg';
import ClipboardLogo from '/assets/clipboard.png';
import Orange from '/assets/orange-calculator.png';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const runtime = "edge";

const Projects = () => {
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return <div className = "container grid items-center justify-center gap-4 md:grid-cols-4 sm:grid-cols-auto">
      <Card>
          <CardHeader className = "flex items-center text-center">
            <CardTitle>Portfolio Website</CardTitle>
            <CardDescription>
            This website!
          </CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <button className = "bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[950px] max-h-1000 flex">
              <DialogHeader className = "container items-center justify-center">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
              <CarouselContent>
              <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image className="inline-block align-middle"src= {Portfolio1} alt="Portfolio1 Icon" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image className="inline-block align-middle" src= {Portfolio2} alt="Portfolio1 Icon" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
                <DialogTitle>Portfolio Website</DialogTitle>
                <DialogDescription>
                My portfolio displaying all of the projects I have made!
                </DialogDescription>
                <DialogDescription>
                Learn more about this on <a className = "hover:bg-gray-200" href="https://github.com/1aaronw/portfolio"><Image className="inline-block align-middle" src= {Github} width={20} height={20} alt="GitHub Icon" /></a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
            <div className="flex gap-2">
              <Badge className = "bg-orange-600">TypeScript</Badge>
              <Badge className = "bg-red-600">Next.js</Badge>
              <Badge className = "bg-blue-600">Tailwind</Badge>
            </div>
            </CardHeader>
      </Card>
      <Card>
      <CardHeader className = "flex items-center text-center">
            <CardTitle>CLI-Lock</CardTitle>
            <CardDescription>
            A password management tool made to encrypt and store account information of your domains
          </CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <button className = "bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[950px] max-h-1000 flex">
              <DialogHeader className = "container items-center justify-center">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
              <CarouselContent>
              <CarouselItem>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image className="inline-block align-middle"src= {CLI_Lock4} alt="CLI_Lock1 Icon" />
                      </CardContent>
                    </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image className="inline-block align-middle" src= {CLI_Lock2} alt="CLI_Lock2 Icon" />
                  </CardContent>
                 </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image className="inline-block align-middle" src= {CLI_Lock3} alt="CLI_Lock3 Icon" />
                  </CardContent>
                 </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image className="inline-block align-middle" src= {CLI_Lock1} alt="CLI_Lock4 Icon" />
                  </CardContent>
                 </Card>
              </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
                <DialogTitle>CLI-Lock (School Project)</DialogTitle>
                <DialogDescription>
                CLI-Lock is a pasword management tool designed to store the passwords of any inputted domains and encrypts them with the Crypto++ library. It includes numerous features such as randomly generated secure passwords and searching every domain with the same tag.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
          <div className="flex gap-2">
            <Badge className = "bg-yellow-600">C++</Badge>
          </div>
          </CardHeader>
      </Card>
      <Card>
          <CardHeader className = "flex items-center text-center">
            <CardTitle>TV Character Database Visualiser</CardTitle>
            <CardDescription>
            A visual database of every character's information who appeared in Better Call Saul
          </CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <button className = "bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[950px] max-h-1000 flex">
              <DialogHeader className = "container items-center justify-center">
              <Carousel
                className="w-full max-w-xl"
              >
              <CarouselContent>
              <CarouselItem>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image className="inline-block align-middle"src= {BCS} alt="BCS Icon" />
                      </CardContent>
                    </Card>
              </CarouselItem>
              </CarouselContent>
              </Carousel>
                <DialogTitle>TV Character Database Visualiser</DialogTitle>
                <DialogDescription>
                This project displays the character information of every character appearing in Better Call Saul. This fetches data from Breaking Bad API (although the site is currently deprecated!) and develops a character list that serves as a library of those who appear in Better Call Saul.  
                </DialogDescription>
                <DialogDescription>
                Learn more about this on <a className = "hover:bg-gray-200" href="https://github.com/1aaronw/bcs-characters"><Image className="inline-block align-middle" src= {Github} width={20} height={20} alt="GitHub Icon" /></a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
          <div className="flex gap-2">
            <Badge className = "bg-purple-600">React.js</Badge>
          </div>
          </CardHeader>
      </Card>
      <Card>
          <CardHeader className = "flex items-center text-center">
            <CardTitle>Clipboard</CardTitle>
            <CardDescription>
            A Chrome extension that stores notes on your Chrome tab
          </CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <button className = "bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[950px] max-h-1000 flex">
              <DialogHeader className = "container items-center justify-center">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
              <CarouselContent>
              <CarouselItem>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image className="inline-block align-middle"src= {Clipboard1} alt="Clipboard Screenshot Icon" />
                      </CardContent>
                    </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image className="inline-block align-middle" src= {ClipboardLogo} alt="Clipboard Logo Icon" />
                  </CardContent>
                 </Card>
              </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
                <DialogTitle>Clipboard</DialogTitle>
                <DialogDescription>
                Clipboard is a Chrome extension where you can save and clear notes on your chrome tab. I developed this as I wanted to take quick notes during online zoom lectures on my computer!
                </DialogDescription>
                <DialogDescription>
                Learn more about this on <a className = "hover:bg-gray-200" href="https://github.com/1aaronw/Clipboard"><Image className="inline-block align-middle" src= {Github} width={20} height={20} alt="GitHub Icon" /></a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
          <div className="flex gap-2">
            <Badge className = "bg-green-700">JavaScript</Badge>
            <Badge className = "bg-gray-400">HTML</Badge>
          </div>
          </CardHeader>
      </Card>
      <Card>
          <CardHeader className = "flex items-center text-center">
            <CardTitle>Optimal Oranges Calculator (Hackathon Project)</CardTitle>
            <CardDescription>
            A hackathon project from Cutie Hack 2022 that calculates the optimal time to harvest oranges
          </CardDescription>
          <Dialog>
            <DialogTrigger asChild>
              <button className = "bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[950px] max-h-1000 flex">
              <DialogHeader className = "container items-center justify-center">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
              <CarouselContent>
              <CarouselItem>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image className="inline-block align-middle"src= {Orange} alt="Orange Calculator Icon" />
                      </CardContent>
                    </Card>
              </CarouselItem>
              </CarouselContent>
              </Carousel>
                <DialogTitle>Optimal Oranges Calculator (Hackathon Project)</DialogTitle>
                <DialogDescription>
                This is a front-end application that gives the date when you harvest the most amount of oranges from a given date.
                </DialogDescription>
                <DialogDescription>
                Learn more about this on <a className = "hover:bg-gray-200" href="https://github.com/1aaronw/orange-calculator"><Image className="inline-block align-middle" src= {Github} width={20} height={20} alt="GitHub Icon" /></a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
          <div className="flex gap-2">
            <Badge className = "bg-green-700">JavaScript</Badge>
            <Badge className = "bg-gray-700">CSS</Badge>
          </div>
          </CardHeader>
      </Card>
      

  </div>
}

export default Projects;