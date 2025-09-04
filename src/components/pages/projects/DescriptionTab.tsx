type TProps = {
    description: string;
    duration: string;
};
const DescriptionTab = ({ description, duration }: TProps) => {
    return (
        <div className="">
            <div className=''>
                <h2 className='text-xl font-semibold text-white'>Project Description </h2>
                <p className=' mt-3 sm:ml-7 text-white/80'>{description}</p>
            </div>{" "}
            <div className='flex gap-5 my-5 text-white'>
                <h2 className='text-xl font-semibold'>Project duration: </h2>
                <p className='font-bold text-2xl text-white/80'>{duration}</p>
            </div>
        </div>
    );
};

export default DescriptionTab;
