"use client";
import { useState } from "react";
import { Modal } from "antd";
import resume from "@/assets/Resume.jpg";
import Image from "next/image";

const ShowResumeModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <button onClick={() => setOpen(true)} className='button_primary'>
                Show Resume
            </button>
            <Modal
                className='resume-modal'
                footer={null}
                open={open}
                onCancel={() => setOpen(false)}>
              
                <Image src={resume} alt='resume' />
            </Modal>
        </div>
    );
};

export default ShowResumeModal;
