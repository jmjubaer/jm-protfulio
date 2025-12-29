import SectionTitle from "@/components/shered/SectionTitle";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import ViewCertificate from "./ViewCertificate";
const CourseAndAchievement = () => {
    const courseData = [
        {
            id: 1,
            logo: "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756920213/PH_qrcrxn.jpg",
            title: "Complete Web Development Course",
            provider: "Programming Hero",
            providerLink: "https://web.programming-hero.com",
            description:
                "Comprehensive course covering advanced React patterns, hooks, performance optimization, and modern development practices. Learn to build scalable applications with React 18 features.",
            duration: "8 Months",
            date: "Jan,2023 - Aug,2023",
            skills: [
                "CSS",
                "HTML",
                "JavaScript",
                "React",
                "TailwindCSS",
                "Bootstrap",
                "Firebase",
                "Express.js",
                "MongoDB",
                "Figma",
                "Git",
                "Github",
                "Vercel",
                "DaisyUI",
            ],
            certificate:
                "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756871206/Complete-web-development-certificate_uha9es.jpg",
            courseLink: "https://web.programming-hero.com/course-details",
        },
        {
            id: 2,
            logo: "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756920213/PH_qrcrxn.jpg",
            title: "Next Level Web Development",

            provider: "Programming Hero",
            providerLink: "https://web.programming-hero.com",
            description:
                "Comprehensive course covering advanced React patterns, hooks, performance optimization, and modern development practices. Learn to build scalable applications with React 18 features.",
            duration: "8 Months",
            date: "Nov 2024 - Jun 2025",
            skills: [
                "TypeScript",
                "Redux",
                "Next.js",
                "NextAuth",
                "Node.js",
                "Express.js",
                "JWT",
                "MongoDB",
                "Mongoose",
                "SQL",
                "PostgreSQL",
                "Ant Design",
                "ShadCN",
            ],
            certificate:
                "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756871208/Next-level-web-development-certificate_oglpag.jpg",
            courseLink: "https://web.programming-hero.com/home/level2",
        },
        // {
        //     logo: "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756914485/wecofy_ez1v53.png",
        //     title: "Complete An Internship",
        //     provider: "Wecofy",
        //     description:
        //         "Comprehensive course covering advanced React patterns, hooks, performance optimization, and modern development practices. Learn to build scalable applications with React 18 features.",
        //     duration: "3 Months",
        //     date: "Dec,2024 - Feb,2024",
        //     skills: ["Next.js", "TailwindCSS", "DaisyUI", "Hook-Form"],
        //     certificate:
        //         "https://res.cloudinary.com/dykcsfdvi/image/upload/v1756871204/Internship-Certificate_p36vn5.jpg",
        //     companyLink: "https://web.programming-hero.com/home/level2",
        // },
    ];
    return (
        <div className='pt-28 jm_container'>
            <SectionTitle
                firstHeading={"Course And"}
                lastheading={"Achievements "}
                subHeading={
                    "My learning and achievement journey"
                }></SectionTitle>

            <div className='grid md:grid-cols-2 gap-7 mt-14'>
                {courseData?.map((course) => (
                    <div
                        data-aos='zoom-in'
                        key={course.id}
                        className='bg-secondary/50 sm:p-7 p-4 rounded-lg flex flex-col justify-between gap-4 '>
                        <div className='flex items-center gap-4'>
                            <a href={course.providerLink} target='_blank'>
                                <Image
                                    src={course.logo}
                                    alt={course.title}
                                    width={64}
                                    height={64}
                                    className='w-16 h-16 rounded-lg'
                                />
                            </a>
                            <div className=''>
                                <h3 className='font-semibold'>
                                    {course.title}
                                </h3>
                                <a
                                    href={course.providerLink}
                                    target='_blank'
                                    className='text-white/50 hover:underline hover:text-blue-500'>
                                    {course.provider}
                                </a>
                            </div>
                        </div>
                        <p className='text-white/60'>{course.description}</p>

                        <div className='grid grid-cols-2 justify-between items-center'>
                            <div className=''>
                                <h4 className='font-medium'>Duration</h4>
                                <p className='text-white/50'>
                                    {course.duration}
                                </p>
                            </div>
                            <div className=''>
                                <h4 className='font-medium'>Date</h4>
                                <p className='text-white/50'>{course.date}</p>
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='font-medium'>Skills Acquired</h4>
                            <div className='flex flex-wrap gap-2 mt-3'>
                                {course?.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className='bg-secondary text-[#7547FF] rounded-full px-3 py-1 text-sm'>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4 mt-2'>
                            <ViewCertificate
                                certificate={course?.certificate}
                                title={course?.title}
                            />
                            <a
                                target='_blank'
                                href={course?.courseLink}
                                className='button bg-primary/50 flex items-center justify-center gap-3'>
                                {" "}
                                <TbExternalLink /> Course Link
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseAndAchievement;
