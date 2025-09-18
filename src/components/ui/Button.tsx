type TProps = {
    children: React.ReactNode;
};
const Button = ({ children }: TProps) => {
    return (
        <div>
            <button className=' button_primary'>
                {children}
            </button>
        </div>
    );
};

export default Button;
