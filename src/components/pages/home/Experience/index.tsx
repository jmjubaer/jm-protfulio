import SectionTitle from "@/components/shered/SectionTitle";
import nexstack from "@/assets/nexstack.jpg";
import wecofy from "@/assets/wecofy.jpg";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceSection = () => {
    return (
        <div className='pt-24 jm_container'>
            <SectionTitle
                subHeading={"Explore my Industry Experience."}
                firstHeading={"Professional "}
                lastheading={"Experience"}></SectionTitle>

            {/* Skills card */}
            <div className='mt-14'>
                <VerticalTimeline>
                    {/* Nexstack experience */}
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "#1d1836",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #232631",
                        }}
                        date='April 2024 - August 2024'
                        iconStyle={{ background: "#fff", color: "#fff" }}
                        icon={
                            <div className='flex justify-center items-center w-full h-full'>
                                <Image
                                    src={nexstack}
                                    alt='Nexstack'
                                    className='w-[60%] h-[60%] object-contain'
                                />
                            </div>
                        }>
                        <div>
                            <h3 className='text-white text-[24px] font-bold'>
                                Full Stack Developer
                                <span className='text-sm font-normal text-white/80'>
                                    , Full Time
                                </span>
                            </h3>
                            <p
                                className='text-white/80 text-[20px] font-semibold'
                                style={{ margin: 0, marginTop: "10px" }}>
                                Nexstack
                            </p>
                            <p
                                className='text-white/70 text-sm font-medium'
                                style={{ margin: 0 }}>
                                Remote, Singapore
                            </p>
                        </div>

                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Create pixel perfect UI follow Figma design
                                align with designer team.
                            </li>
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Create the UI by using Next.js, Tailwind CSS,
                                and relevant technology.
                            </li>{" "}
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Align with Strapi backend and use GraphQL with
                                Zustand for data fetching.
                            </li>{" "}
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Align with dynamic and multiple teams from
                                multiple countries.
                            </li>{" "}
                        </ul>
                    </VerticalTimelineElement>

                    {/* Wecofy experience */}
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "#1d1836",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #232631",
                        }}
                        date='December 2024 - February 2024'
                        iconStyle={{ background: "#fff", color: "#fff" }}
                        icon={
                            <div className='flex justify-center items-center w-full h-full'>
                                <Image
                                    src={wecofy}
                                    alt='Wecofy'
                                    className='w-[60%] h-[60%] object-contain'
                                />
                            </div>
                        }>
                        <div>
                            <h3 className='text-white text-[24px] font-bold'>
                                Next Js Developer
                                <span className='text-sm font-normal text-white/80'>
                                    , Internship
                                </span>
                            </h3>
                            <p
                                className='text-white/80 text-[20px] font-semibold'
                                style={{ margin: 0, marginTop: "10px" }}>
                                Wecofy Technotides Pvt Ltd
                            </p>
                            <p
                                className='text-white/70 text-sm font-medium'
                                style={{ margin: 0 }}>
                                Remote, Nodia, India
                            </p>
                        </div>

                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Create the main project UI by following the
                                design.
                            </li>{" "}
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Make it dynamic by using the backend API, and
                                follow the documentation.
                            </li>{" "}
                            <li className=' text-[14px] pl-1 tracking-wider'>
                                Create a dynamic and separate dashboard to
                                manage the overall website.
                            </li>{" "}
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            {/* <div className='grid md:grid-cols-3 gap-4 lg:gap-7 mt-14'>
                <div
                    data-aos='fade-right'
                    className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
                    <Image
                        src={collage}
                        alt='Education'
                        className='mx-auto w-[150px]'
                    />
                    <h2 className='text-2xl'>Bachelor’s (Honors)</h2>
                    <h3 className='text-xl font-medium'>Political science</h3>
                    <p className='font-bold'>2023 to 2028</p>
                    <p className='text-lg '>
                        Govt. Siraj Uddin Memorial Collage
                    </p>
                </div>
                <div
                    data-aos='fade-up'
                    className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
                    <Image
                        src={wecofy}
                        alt='Education'
                        className='mx-auto w-[150px]'
                    />
                    <h2 className='text-2xl'>Next Js Developer</h2>
                    <h3 className='text-xl font-medium'>INTERN </h3>
                    <p className='font-bold'>Dec-2023 to Feb-2024</p>
                    <p className='text-lg '>WECOFY TECHNOTIDES PVT LTD</p>
                </div>
                <div
                    data-aos='fade-left'
                    className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
                    <Image
                        src={nexstack}
                        alt='Education'
                        className='mx-auto w-[300px]'
                    />
                    <h2 className='text-2xl'>Full Stack Developer</h2>
                    <h3 className='text-xl font-medium'>Full Time</h3>
                    <p className='font-bold'> Apr-2024 to Aug-2024 </p>
                    <p className='text-lg '>NexStack, Singapore</p>
                </div>
            </div> */}
        </div>
    );
};

export default ExperienceSection;
