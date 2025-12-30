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
                className='button rounded-2xl flex items-center gap-3 justify-center bg-linear-to-tr from-[#139afd]  via-primary  to-[#13fdfd] border border-[#13fdfd] w-full'>
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
