"use client";
import Image from 'next/image';
import Gmail from '/assets/gmail.png';
import LinkedIn from '/assets/linkedin.png';
import GitHub from '/assets/github.png';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const Contact = () => {
    return <div className = "container mx-auto align-items-center">
        <Card>
            <CardHeader>
                <CardTitle>
                    <Image className="inline-block align-middle" src= {Gmail} width={20} height={20} alt="Gmail Icon" />
                    <span className="inline-block align-middle ml-2"> Email </span>
                </CardTitle>
                <CardDescription><a className = "hover:bg-gray-100" href="mailto:aaronwanglucky@gmail.com?Subject=">aaronwanglucky@gmail.com</a></CardDescription>
            </CardHeader>
            <CardHeader>
                <CardTitle>
                    <Image className="inline-block align-middle" src= {LinkedIn} width={20} height={20} alt="LinkedIn Icon" />
                    <span className="inline-block align-middle ml-2"> LinkedIn </span>
                </CardTitle>
                <CardDescription><a className = "hover:bg-gray-100"  href="https://www.linkedin.com/in/aaron-wang-4b9736244">https://www.linkedin.com/in/aaron-wang-4b9736244</a></CardDescription>
            </CardHeader>
            <CardHeader>
                <CardTitle>
                    <Image className="inline-block align-middle" src= {GitHub} width={20} height={20} alt="GitHub Icon" />
                    <span className="inline-block align-middle ml-2"> GitHub </span>
                </CardTitle>
                <CardDescription><a className = "hover:bg-gray-100" href="https://github.com/1aaronw">https://github.com/1aaronw</a></CardDescription>
            </CardHeader>
            <CardFooter>
                <p>Feel free to contact me!</p>
            </CardFooter>
        </Card>
        

    </div>
}

export default Contact;