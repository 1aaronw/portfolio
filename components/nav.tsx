"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const pathName = usePathname();

    return <nav className = "flex gap-4">
        {links.map((link, index) => {
            return ( 
                <Link href={link.path} key={index} className ={'${link.path === pathname && "text-accent border-b-2 border-orange-400'}>
                    {link.name}
                </Link>
            );
        })}
    </nav>
}

export default Nav;