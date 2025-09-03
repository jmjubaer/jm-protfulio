"use client";
import { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import { SlBadge } from "react-icons/sl";

const ViewCertificate = ({ certificate,title }: { certificate: string,title:string }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <button
                onClick={() => setOpen(true)}
                className='button flex items-center gap-3 justify-center bg-gradient-to-r to-[#1C99FE] via-[#7644FF] from-[#FD4766] w-full'>
                {" "}
                <SlBadge /> View Certificate
            </button>
            <Modal
                className='resume-modal'
                footer={null}
                open={open}
                onCancel={() => setOpen(false)}>
                <Image
                    src={certificate}
                    className={`w-full rounded-2xl border-primary ${title == "Next Level Web Development" && "border"}`}
                    alt='certificate'
                    width={500}
                    height={300}
                />
            </Modal>
        </div>
    );
};

export default ViewCertificate;
