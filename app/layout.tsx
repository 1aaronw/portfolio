import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Aaron Wang",
  description: "Aaron Wang's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
      <Header/> {children} </body>
      <main></main>
    </html>
  );
}
