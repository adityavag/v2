import Image from "next/image";
import Profile from "../../../public/assets/profile.jpg"
const Left = () => {
    return (
        <div>
            <div className="mb-10 mt-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-4 content-center max-lg:mt-32">
                    <span className="lg:fixed">
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#C4BFB7]'>
                            Hello !
                        </h1>
                        <br />
                        <br />
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#C4BFB7] flex flex-coloumn items-center'>
                            I'm Aditya
                        </h1>
                        <br></br>
                        <br></br>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Left;