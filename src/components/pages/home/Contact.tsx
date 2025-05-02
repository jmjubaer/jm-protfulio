"use client"
import Lottie from "lottie-react";
import animation from "@/assets/contact-us-animation.json"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "@/components/shered/SectionTitle";
const Contact = () => {
    return (
        <div id="contact" className="py-28 jm_container">
            <SectionTitle firstHeading={"Contact"} lastheading={"Me"} subHeading={"Contact me without any hesitation"}></SectionTitle>
            <div data-aos="fade-right" className="grid lg:grid-cols-2 gap-8 mt-14 items-center">
                <div data-aos="fade-up" className="">
                    <Lottie className="lg:w-3/4 mx-auto" animationData={animation} loop={true} />
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div data-aos="fade-right" className="text-center border-2 p-5 rounded-tr-3xl rounded-bl-3xl bg_gradient text-white flex items-center gap-3">
                            <FaPhoneAlt className="text-2xl "/>
                            <p className="">(+880) 1316467454</p>
                        </div>
                        <div data-aos="fade-left" className="text-center border-2 p-5 rounded-tr-3xl rounded-bl-3xl bg_gradient text-white flex items-center gap-3">
                            <FaEnvelope className=" text-2xl "/>
                            <p className="">jmjubaer3927@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="">
                    <form method="POST" action="https://formspree.io/f/meqbjwwz">
                        <div data-aos="fade-up" className="flex flex-wrap sm:flex-nowrap gap-5">
                            <input name="First Name" type="text" required className="w-full p-3 dics_effects rounded-xl px-5 outline-none" placeholder="Enter Your First Name*"/>
                            <input name="Last Name" type="text" required className="w-full p-3 dics_effects rounded-xl px-5 outline-none" placeholder="Enter Your Last Name*"/>
                        </div>
                        <div data-aos="fade-up" className="flex flex-wrap sm:flex-nowrap gap-5 mt-10">
                            <input name="Phone Number" type="number" className="w-full p-3 dics_effects rounded-xl px-5 outline-none" placeholder="Enter Your Number"/>
                            <input name="Email" type="email" required className="w-full p-3 dics_effects rounded-xl px-5 outline-none" placeholder="Enter Your Email*"/>
                        </div>
                        <input data-aos="fade-up" name="Subject" type="text" className="w-full p-3 dics_effects rounded-xl px-5 outline-none mt-10" placeholder="Subject"/>
                        <textarea data-aos="fade-up" name="Massage" className="w-full p-3 dics_effects rounded-xl px-5 outline-none mt-10 min-h-[150px]" placeholder="Massage ....."></textarea>
                        <input data-aos="fade-up" type="submit" value="Send Massage" className="bg_gradient rounded-xl mt-10 mx-auto block text-white px-8 py-3 text-lg cursor-pointer"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;