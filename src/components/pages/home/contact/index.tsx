"use client";
import SectionTitle from "@/components/shered/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { TContact } from "@/types";
import { sendMessage } from "@/services/sendMessage";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StarBackground from "./StarBackground";
import { Tooltip } from "antd";
const Contact = () => {
    const [copied, setCopied] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TContact>();

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    const onSubmit: SubmitHandler<TContact> = async (data) => {
        try {
            const messageBody = {
                name: `${data?.firstName}  ${data?.lastName}`,
                email: data?.email,
                phone: data?.phone,
                subject: data?.subject,
                message: data?.message,
            };
            const result = await sendMessage(messageBody);
            console.log(result);
            if (result?.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success ",
                    text: "Thank you for Contact Us!",
                });
                reset();
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600,
            easing: "ease-in-sine",
            // delay: 0,
        });
    }, []);
    return (
        <div id='contact' className='py-28 jm_container relative min-h-screen'>
            <StarBackground />
            <SectionTitle
                firstHeading={"Contact"}
                lastheading={"Me"}
                subHeading={"Contact me without any hesitation"}></SectionTitle>
            <div
                data-aos='zoom-out'
                className=' mt-14 w-full  max-w-[600px] mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                        className='flex flex-wrap sm:flex-nowrap gap-5'>
                        <Tooltip
                            title={copied ? "Copied!" : "Click to copy"}
                            className=' z-50'>
                            <button
                                type='button'
                                onClick={() =>
                                    copyToClipboard("(+880) 1316467454")
                                }
                                className='w-full p-3 disc_effects_input rounded-xl px-5 text-left cursor-pointer z-10 bg-primary'>
                                +8801316467454
                            </button>
                        </Tooltip>
                        <Tooltip
                            title={copied ? "Copied!" : "Click to copy"}
                            className=' z-50'>
                            <button
                                type='button'
                                onClick={() =>
                                    copyToClipboard("jmjubaer3927@gmail.com")
                                }
                                className='w-full p-3 disc_effects_input rounded-xl px-5 text-left cursor-pointer z-10 bg-primary'>
                                jmjubaer3927@gmail.com
                            </button>
                        </Tooltip>
                    </div>{" "}

                    <div
                        data-aos='fade-up'
                        className='flex flex-wrap sm:flex-nowrap gap-5 mt-10'>
                        <div className='w-full'>
                            <input
                                {...register("firstName", {
                                    required: true,
                                })}
                                type='text'
                                className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none bg-primary'
                                placeholder='Enter Your First Name*'
                            />
                            {errors.firstName && (
                                <p className='text-red-500 text-sm mt-1'>
                                    This field is required
                                </p>
                            )}
                        </div>
                        <div className='w-full'>
                            <input
                                {...register("lastName", {
                                    required: true,
                                })}
                                type='text'
                                className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none bg-primary'
                                placeholder='Enter Your Last Name*'
                            />
                            {errors.lastName && (
                                <p className='text-red-500 text-sm mt-1'>
                                    This field is required
                                </p>
                            )}
                        </div>
                    </div>
                    <div
                        data-aos='fade-up'
                        className='flex flex-wrap sm:flex-nowrap gap-5 mt-10'>
                        <div className='w-full'>
                            <input
                                {...register("phone", {
                                    required: true,
                                })}
                                className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none bg-primary'
                                placeholder='Enter Your Number'
                            />
                            {errors.phone && (
                                <p className='text-red-500 text-sm mt-1'>
                                    This field is required
                                </p>
                            )}
                        </div>
                        <div className='w-full'>
                            <input
                                {...register("email", {
                                    required: true,
                                })}
                                type='email'
                                className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none bg-primary'
                                placeholder='Enter Your Email*'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    This field is required
                                </p>
                            )}
                        </div>
                    </div>
                    <div className=''>
                        <input
                            data-aos='fade-up'
                            {...register("subject", {
                                required: true,
                            })}
                            type='text'
                            className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none mt-10 bg-primary'
                            placeholder='Subject'
                        />
                        {errors.subject && (
                            <p className='text-red-500 text-sm mt-1'>
                                This field is required
                            </p>
                        )}
                    </div>
                    <div className=''>
                        <textarea
                            data-aos='fade-up'
                            {...register("message", {
                                required: true,
                            })}
                            className='w-full p-3 disc_effects_input rounded-xl px-5 outline-none mt-10 min-h-[150px] bg-primary'
                            placeholder='Massage .....'></textarea>
                        {errors.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                This field is required
                            </p>
                        )}
                    </div>
                    <button
                        data-aos='fade-up'
                        className='bg_gradient rounded-xl mt-10 mx-auto block text-white px-8 py-3 text-lg cursor-pointer'
                        type='submit'>
                        {isSubmitting ? "Sending" : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
