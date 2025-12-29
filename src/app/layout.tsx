import type { Metadata } from "next";
import { Belanosima, Poppins, Rubik_Moonrocks } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shered/Navbar";
import Footer from "@/components/shered/Footer";

const rubik_Moonrocks = Rubik_Moonrocks({
    weight: ["400"],
    subsets: ["latin"],
});

const belanosima = Belanosima({
    weight: ["400"],
    subsets: ["latin"],
});
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Md Jubaer Jm Portfolio",
    description: "My name is md jubaer is a MERN stack developer. ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${rubik_Moonrocks.className} ${belanosima.className} ${poppins.className} antialiased bg-primary text-[#E5E6E7] overflow-x-hidden`}>
                <Navbar />
                <div className='min-h-screen bg-primary'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
