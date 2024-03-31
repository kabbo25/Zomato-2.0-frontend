import { RotatingLines } from "react-loader-spinner";

const LoadSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-40">
            <RotatingLines
                width={'80'}
                strokeColor="tomato"
                ariaLabel="loading"
            />
        </div>
    );
};

export default LoadSpinner;
