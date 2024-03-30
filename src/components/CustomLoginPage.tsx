import logInImage from '../assets/illustration.svg'
const CustomLoginPage = () => {
    return (
        <div className="flex h-full flex-col bg-white">
            <div className="flex flex-1 items-center">
                <div className="hidden w-[70%] lg:flex lg:items-center lg:justify-center">
                    <img
                        src={logInImage}
                        alt="Welcome to Hot Tiffin"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>

    )
}
export default CustomLoginPage
