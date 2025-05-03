import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link
                href={"/"}
                className='logo_font text-4xl sm:text-5xl gradient_text'>
                JM Jubaer
            </Link>
        </div>
    );
};

export default Logo;
