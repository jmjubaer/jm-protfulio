"use client";
import { Pagination, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import technologyIcon from "../../../assets/technology.png";
import { Layout } from "antd";
import { getAllProjects } from "@/services/projectServices";
import { TProject } from "@/types/project.type";
import ProjectCard from "@/components/ui/ProjectCard";
import { IMeta } from "@/types";
import { TSkill } from "@/types/skill.type";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";

const { Sider } = Layout;

const Projects = ({
    skills,
    technologyParams,
}: {
    skills: TSkill[];
    technologyParams?: string | undefined;
}) => {
    const [projects, setProjects] = useState<TProject[] | null>(null);
    const [meta, setMeta] = useState<IMeta | null>(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [technology, setTechnology] = useState(technologyParams);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await getAllProjects([
                { name: "page", value: page },
                { name: "limit", value: 6 },
                { name: "sort", value: "_id" },
                { name: "fields", value: "title,techTitle,features,mainImage" },
                { name: "searchTerm", value: searchTerm },
                ...(technology
                    ? [{ name: "technology", value: technology }]
                    : []),
            ]);
            if (data.success) {
                setMeta(data?.meta);
                setProjects(data?.data);
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [technology, page, searchTerm]);

    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [technology, page, searchTerm]);
    return (
        <div className='jm_container bg-primary'>
            <Layout>
                {/* Filter and search section */}
                <Sider
                    width={250}
                    // theme='dark'
                    className='pt-20'
                    breakpoint='lg'
                    collapsedWidth='0'>
                    {/* Filter and search section */}
                    <div
                        style={{ scrollbarWidth: "none" }}
                        className=' sticky h-[calc(100vh-70px)] overflow-auto top-0 left-0 border-r border-gray-300 text-base pr-3'>
                        <div className='relative w-full h-fit mt-5'>
                            <IoSearchSharp className='absolute top-1/2 right-2 text-xl text-gray-500 -translate-y-1/2' />
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type='text'
                                className='w-full p-3 dics_effects rounded-xl px-5 outline-none'
                                placeholder='Search Bicycles...'
                            />
                        </div>
                        <hr className='text-gray-300 my-5' />
                        <div className=''>
                            <h3 className='block font-bold text-2xl secondary_font text-white'>
                                Technology
                            </h3>
                            <ul className='block w-full list-disc px-3 py-2 text-gray-600 rounded-3xl'>
                                <li
                                    className={`flex border-t border-gray-300 py-2 items-center cursor-pointer gap-2 font-medium  ${
                                        technology === ""
                                            ? "gradient_text"
                                            : "text-white/80"
                                    }`}
                                    onClick={() => setTechnology("")}
                                    value=''>
                                    {" "}
                                    <Image
                                        src={technologyIcon}
                                        alt='icon'
                                        width={30}
                                        height={30}
                                    />
                                    ALL PROJECT
                                </li>
                                {skills?.map((skill) => (
                                    <li
                                        key={skill?.title}
                                        className={`flex items-center border-t border-gray-300 py-2 cursor-pointer gap-3 font-medium ${
                                            technology === skill?.title
                                                ? "gradient_text"
                                                : "text-white/70"
                                              
                                        }`}
                                        onClick={() =>
                                            setTechnology(skill?.title)
                                        }
                                        value=''>
                                        {" "}
                                        <Image
                                            src={skill?.image}
                                            alt='icon'
                                            width={30}
                                            height={30}
                                        />
                                        {skill?.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Sider>
                {/* Product section */}
                <Layout>
                    <div
                        ref={contentRef}
                        style={{ scrollbarWidth: "none" }}
                        className=' h-[calc(100vh-10px)] overflow-auto pt-14 bg-primary lg:p-5 pr-0'>
                        <Spin spinning={loading} tip='Loading...' size='large'>
                            {/* Product section */}
                            <div className='mb-5'>
                                {projects && projects?.length > 0 ? (
                                    projects?.map(
                                        (project: TProject, idx: number) => (
                                            <ProjectCard
                                                key={idx}
                                                idx={idx}
                                                project={project}></ProjectCard>
                                        )
                                    )
                                ) : (
                                    <div className='text-gray-400 text-2xl text-center col-span-3 my-20 mt-40'>
                                        Project adding soon...
                                    </div>
                                )}
                            </div>
                        </Spin>
                        <Pagination
                            className='flex justify-center mt-10'
                            onChange={(value) => setPage(value)}
                            total={meta?.total}
                            pageSize={6}
                            current={page}
                        />
                    </div>
                </Layout>
            </Layout>
        </div>
    );
};

export default Projects;
