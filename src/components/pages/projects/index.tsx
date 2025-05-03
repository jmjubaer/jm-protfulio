"use client";
import { Pagination, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { Layout } from "antd";
import { getAllProjects } from "@/services/projectServices";
import { TProject } from "@/types/project.type";
import ProjectCard from "@/components/ui/ProjectCard";
import { IMeta } from "@/types";

const { Sider } = Layout;

const Projects = () => {
    const [projects, setProjects] = useState<TProject[] | null>(null);
    const [meta, setMeta] = useState<IMeta | null>(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [technology, setTechnology] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await getAllProjects([
                { name: "page", value: page },
                { name: "limit", value: 6 },
                { name: "sort", value: "_id" },
                { name: "searchTerm", value: searchTerm },
                ...(technology ? [{ name: "type", value: technology }] : []),
            ]);
            if (data.success) {
                setMeta(data?.meta);
                setProjects(data?.data);
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [technology, page, searchTerm]);
    console.log(projects);

    // useEffect(() => {
    //     if (param.get("category")) {
    //         setCategory(param.get("category")!);
    //     }
    // }, [param]);
    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [technology, page, searchTerm]);
    return (
        <div className='jm_container '>
            <Layout>
                {/* Filter and search section */}
                <Sider
                    width={250}
                    theme='light'
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
                            <h3 className='block font-bold text-2xl secondary_font text-primary'>
                                Category
                            </h3>
                            <ul className='block w-full list-disc px-3 py-2 text-gray-600 rounded-3xl'>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === ""
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> All
                                    Categories
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "Mountain"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("Mountain")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> Mountain
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "Road"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("Road")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> Road Cycle
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "Hybrid"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("Hybrid")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' />
                                    Hybrid Cycle
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "BMX"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("BMX")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> BMX Cycle
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "Electric"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("Electric")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> Electric
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer gap-2 font-medium my-4 ${
                                        technology === "Kids"
                                            ? "text-primary/70"
                                            : ""
                                    }`}
                                    onClick={() => setTechnology("Kids")}
                                    value=''>
                                    {" "}
                                    <FaTag className='text-sm ' /> Kids Cycle
                                </li>
                            </ul>
                        </div>
                    </div>
                </Sider>
                {/* Product section */}
                <Layout>
                    <div
                        ref={contentRef}
                        style={{ scrollbarWidth: "none" }}
                        className=' h-[calc(100vh-30px)] overflow-auto  lg:p-5 pr-0'>
                        <Spin spinning={loading} tip='Loading...' size='large'>
                            {/* Product section */}
                            <div className='mb-5'>
                                {projects && projects?.length > 0 ? (
                                    Array(3)
                                        .fill(projects[0])
                                        ?.map(
                                            (
                                                project: TProject,
                                                idx: number
                                            ) => (
                                                <ProjectCard
                                                    key={idx}
                                                    idx={idx}
                                                    project={
                                                        project
                                                    }></ProjectCard>
                                            )
                                        )
                                ) : (
                                    <div className='text-gray-400 text-2xl text-center col-span-3 my-10'>
                                        There has no available bicycle
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
