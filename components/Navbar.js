import Link from "next/link";


const Navbar = () => {
    return(
        <ul className="flex w-full gap-5 my-5">
           <Link href={"/"}><li>Home</li></Link>
           <Link href={"/About"}><li>About</li></Link>
           <Link href={"/Contact"}><li>Contact us</li></Link>
        </ul>
    )
}

export default Navbar;