import Link from "next/link";
import Nav from "./nav";

const Header = () => {
    return <header className = "py-8 xl:py-12 text-black">
        <div className = "container mx-auto flex items-center justify-between">
            <Link href = "/">
                <h1 className = "text-3xl font-bold">
                    Aaron Wang
                </h1>
                <div className = "flex items-center gap-8">
                    <Nav />
                </div>
            </Link>
        </div>
        </header>


}

export default Header;