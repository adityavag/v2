import BEL from '../../../public/assets/download.png'
import Image from 'next/image';
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx'
const Right = () => {
    return (
        <div className=" text-justify max-lg:mt-4 col-start-2 text-[#C4BFB7]">
            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">About</h2>
                <p className="mb-4 text-justify font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias culpa iste eaque! Eius architecto similique voluptatem commodi dolorem ad sunt illum ratione reprehenderit consequatur totam aliquid nisi dolore odit velit id officiis, molestias exercitationem. Aspernatur, iusto incidunt! Provident eaque, voluptas sed tempora facilis aspernatur eligendi atque. Molestias fugit fuga dolor cupiditate. Praesentium, molestias mollitia! Quis delectus eos voluptate! Nesciunt, provident.
                </p>
                <span className="flex flex-row text-xl">
                    <a href="https://github.com/adityavag"><RxGithubLogo className='hover:text-cyan-500 hover:cursor-pointer' /></a>
                    <a href="https://www.linkedin.com/in/adityacse"><RxLinkedinLogo className='ml-4 hover:text-cyan-500 hover:cursor-pointer' /></a>
                    <a href="https://twitter.com/aditya_vagarwal"><RxTwitterLogo className='ml-4 hover:text-cyan-500 hover:cursor-pointer' /></a>
                </span>
            </div>

            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">Skills</h2>
                <p className="mb-4 text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure molestias officiis temporibus blanditiis placeat. Ipsum eius velit omnis exercitationem, quo assumenda recusandae iusto aliquam blanditiis nihil deleniti eum! Veritatis voluptatem soluta dolores, voluptas dolore deleniti cumque molestiae qui mollitia neque porro sequi eos natus aperiam, non rerum. Dolores aut sint quis dolor dignissimos consectetur itaque, impedit asperiores facilis ex!
                </p>
            </div>

            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">Experience</h2>
                <div>
                    <div className="bg-[#202020] shadow-lg p-6 flex">
                        <Image
                            className="h-12 w-12 mt-2 mr-4"
                            src={BEL}
                            alt="Company Logo"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Bharat Electronics Limited</h2>
                            <p className="text-gray-500 font-semibold">Intern</p>
                            <p className="text-gray-500 font-semibold">June 2023 - July 2023</p>
                            {/* <ul className="list-disc list-inside mt-4">
                                <li className="text-gray-700">Responsibility 1</li>
                                <li className="text-gray-700">Responsibility 2</li>
                                <li className="text-gray-700">Responsibility 3</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Right;