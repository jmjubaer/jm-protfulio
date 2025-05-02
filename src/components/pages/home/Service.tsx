import image1 from "@/assets/service/1.jpg";
import image2 from "@/assets/service/2.jpg";
import image3 from "@/assets/service/3.jpg";
import image4 from "@/assets/service/4.jpg";
import image5 from "@/assets/service/5.jpg";
import image6 from "@/assets/service/6.jpg";
import SectionTitle from "@/components/shered/SectionTitle";
import Image from "next/image";
const Service = () => {
    return (
        <div id='service' className='py-28 jm_container px-2 overflow-hidden'>
            <SectionTitle
                firstHeading={"My"}
                lastheading={"Services"}
                subHeading={"Explore my services"}></SectionTitle>
            <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div data-aos='fade-right' className=' shadow-xl rounded-xl'>
                    <figure>
                        <Image
                            src={image6}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Front-End Developer
                        </h2>
                        <p>
                            I specialize in creating responsive, accessible, and
                            user-centric interfaces using modern front-end
                            technologies like HTML, CSS, JavaScript, React and
                            Next js.
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' className=' shadow-xl rounded-xl'>
                    <figure>
                        <Image
                            src={image5}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold mb-2'>
                            MERN stack Developer
                        </h2>
                        <p>
                            I build full-stack web applications using MERN
                            technology. From database design to UI, I deliver
                            scalable, maintainable, and high-performance
                            applications.
                        </p>
                    </div>
                </div>
                <div data-aos='fade-left' className='rounded-xl shadow-xl '>
                    <figure>
                        <Image
                            src={image1}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold mb-2'>
                            PSD to HTML
                        </h2>
                        <p>
                            I convert pixel-perfect Photoshop designs into
                            clean, well-structured HTML and CSS code. The output
                            is fully responsive, browser-compatible, and
                            SEO-friendly.
                        </p>
                    </div>
                </div>
                <div data-aos='fade-right' className='rounded-xl shadow-xl '>
                    <figure>
                        <Image
                            src={image2}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Figma to HTML
                        </h2>
                        <p>
                            I turn Figma designs into fully responsive HTML
                            pages, maintaining pixel accuracy, semantic
                            structure, and accessibility best practices to
                            ensure a flawless user experience.
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' className='rounded-xl shadow-xl '>
                    <figure>
                        <Image
                            src={image3}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-3'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Figma to React
                        </h2>
                        <p>I transform Figma UI/UX designs into fully functional, reusable React components, following best practices in state management, component structure, and performance optimization.</p>
                    </div>
                </div>
                <div data-aos='fade-left' className='rounded-xl shadow-xl '>
                    <figure>
                        <Image
                            src={image4}
                            alt='Service Image'
                            className='w-full object-cover h-52'
                        />
                    </figure>
                    <div className='p-3'>
                        <h2 className='text-xl font-semibold mb-2'>
                            PSD to React
                        </h2>
                        <p>Bring your Photoshop designs to life with React. I convert PSD files into dynamic, modular React applications that are scalable and easy to maintain.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
