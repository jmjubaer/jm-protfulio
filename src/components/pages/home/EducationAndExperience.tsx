import SectionTitle from "@/components/shered/SectionTitle";
import collage from "../../../assets/collage.jpg";
import nexstack from "../../../assets/nexstack.jpg";
import wecofy from "../../../assets/wecofy.jpg";
import Image from "next/image";
const EducationAndExperience = () => {
    return (
        <div className='pt-24 jm_container'>
            <SectionTitle
                subHeading={"Explore my education and experience."}
                firstHeading={"Education and"}
                lastheading={"Experience"}></SectionTitle>
            <div className='grid grid-cols-3 gap-7 mt-14'>
                <div data-aos="fade-right" className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
                    <Image
                        src={collage}
                        alt='Education'
                        className='mx-auto w-[150px]'
                    />
                    <h2 className='text-2xl'>Bachelor’s(Honors)</h2>
                    <h3 className='text-xl font-medium'>Political science</h3>
                    <p className='font-bold'>2023 to 2028</p>
                    <p className='text-lg '>
                        Govt. Siraj Uddin Memorial Collage
                    </p>
                </div>
                <div data-aos="fade-up" className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
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
                <div data-aos="fade-left" className='border-2 border-gray-300 text-center p-5 rounded-tl-4xl shadow-xl rounded-br-4xl overflow-hidden flex flex-col justify-between'>
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
            </div>
        </div>
    );
};

export default EducationAndExperience;
