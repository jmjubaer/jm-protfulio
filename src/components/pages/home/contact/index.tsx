"use client";
import Lottie from "lottie-react";
import animation from "@/assets/contact-us-animation.json";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "@/components/shered/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { TContact } from "@/types";
import { sendMessage } from "@/services/sendMessage";
import Swal from "sweetalert2";
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TContact>();

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

    return (
        <div id='contact' className='py-28 jm_container'>
            <SectionTitle
                firstHeading={"Contact"}
                lastheading={"Me"}
                subHeading={"Contact me without any hesitation"}></SectionTitle>
            <div
                data-aos='fade-right'
                className='grid lg:grid-cols-2 gap-8 mt-14 items-center'>
                <div data-aos='fade-up' className=''>
                    <Lottie
                        className='lg:w-3/4 mx-auto'
                        animationData={animation}
                        loop={true}
                    />
                    <div className='grid sm:grid-cols-2 gap-5'>
                        <div
                            data-aos='fade-right'
                            className='text-center border-2 p-5 rounded-tr-3xl rounded-bl-3xl bg_gradient text-white flex items-center gap-3'>
                            <FaPhoneAlt className='text-2xl ' />
                            <p className=''>(+880) 1316467454</p>
                        </div>
                        <div
                            data-aos='fade-left'
                            className='text-center border-2 p-5 rounded-tr-3xl rounded-bl-3xl bg_gradient text-white flex items-center gap-3'>
                            <FaEnvelope className=' text-2xl ' />
                            <p className=''>jmjubaer3927@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className=''>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                            data-aos='fade-up'
                            className='flex flex-wrap sm:flex-nowrap gap-5'>
                            <div className='w-full'>
                                <input
                                    {...register("firstName", {
                                        required: true,
                                    })}
                                    type='text'
                                    className='w-full p-3 dics_effects rounded-xl px-5 outline-none'
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
                                    className='w-full p-3 dics_effects rounded-xl px-5 outline-none'
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
                                    className='w-full p-3 dics_effects rounded-xl px-5 outline-none'
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
                                    className='w-full p-3 dics_effects rounded-xl px-5 outline-none'
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
                                className='w-full p-3 dics_effects rounded-xl px-5 outline-none mt-10'
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
                                className='w-full p-3 dics_effects rounded-xl px-5 outline-none mt-10 min-h-[150px]'
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
        </div>
    );
};

export default Contact;
