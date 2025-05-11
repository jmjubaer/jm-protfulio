type TProps = {
    description: string;
    duration: string;
};
const DescriptionTab = ({ description, duration }: TProps) => {
    return (
        <div>
            <div className=''>
                <h2 className='text-xl font-semibold'>Project Description </h2>
                <p className=' mt-3 sm:ml-7'>{description}</p>
            </div>{" "}
            <div className='flex gap-5 my-5'>
                <h2 className='text-xl font-semibold'>Project duration: </h2>
                <p className='font-bold text-2xl '>{duration}</p>
            </div>
        </div>
    );
};

export default DescriptionTab;
