import Link from "next/link";
import { usePathname } from "next/navigation";
type IProps = {
    href: string;
    children: string;
};
const NavLink = ({ href, children }: IProps) => {
    const pathName = usePathname();
    const hrefPath = new URL(href, "http://localhost").pathname;

    const isActive = pathName === hrefPath;
    return (
        <Link
            href={href}
            className={
                isActive
                    ? "gradient_text font-bold"
                    : "text-gray-700 hover:text-primary transition-colors font-medium"
            }>
            {children}
        </Link>
    );
};

export default NavLink;
