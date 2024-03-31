import {RotatingLines} from "react-loader-spinner";

const LoadSpinner = () => {
    return (
        <div className={'flex justify-center bg-gray-600 bg-opacity-40'} style={{width:"100vw", height: "100vh", position: "fixed"}}>
            <RotatingLines
                width="80"
                strokeColor={'tomato'}
                ariaLabel="loading"
            />
        </div>
    )
}
export default LoadSpinner
