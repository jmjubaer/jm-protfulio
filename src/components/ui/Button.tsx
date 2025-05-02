type TProps = {
    children: React.ReactNode;
};
const Button = ({ children }: TProps) => {
    return (
        <div>
            <button className='px-7 py-3 bg-gradient-to-r to-[#1C99FE] via-[#7644FF] from-[#FD4766] uppercase text-white rounded-md '>
                {children}
            </button>
        </div>
    );
};

export default Button;
