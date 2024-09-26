"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from 'next/image';
import Me from '/assets/me.png';

const Home = () => {
  return <div className = "container mx-auto align-items-center">
      <Card>
          <CardHeader className = "flex items-center text-center">
            <Image className="inline-block align-middle h-36 w-36 rounded-full object-none object-[50%_-80px]"src= {Me} alt="Aaron Icon" />
            <CardTitle className = "text-4xl">Hi, I'm Aaron!</CardTitle>
            <CardContent> I am a junior year Computer Science student and I've always had a passion for computing and technology. Outside of coding, I love solving puzzles, discovering new music, and gaming. Feel free to check out my past projects or reach out to me via any of the contact links on my page!</CardContent>
          </CardHeader>
      </Card>
      

  </div>
}

export default Home;
