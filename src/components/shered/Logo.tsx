import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
const Logo = () => {
    return (
        <div>
            <Link
                href={"/"}
                // className='logo_font text-4xl sm:text-5xl gradient_text'
                >
                {/* JM Jubaer */}
                <Image alt="logo" src={logo} className="w-16"/>
            </Link>
        </div>
    );
};

export default Logo;
