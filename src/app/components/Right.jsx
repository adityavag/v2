import BEL from '../../../public/assets/download.png'
import Image from 'next/image';
import Skills from './Skills'
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx'
import Experience from './Experience';
const Right = () => {
    return (
        <div className=" text-justify max-lg:mt-4 col-start-2 text-[#C4BFB7]">
            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">About</h2>
                <p className="mb-4 text-justify font-light">
                    I am currently pursuing a Computer Science undergraduate degree at SRM Institute of Science & Technology.
                    Throughout my academic journey, I have acquired a solid understanding of programming languages such as C, C++, and Java.
                    Additionally, I have gained practical experience in developing web applications. Currently, I am actively exploring the Spring Framework.
                    Looking for intern roles in order to gain valuable industrial experience.
                </p>
                <span className="flex flex-row text-xl">
                    <a href="https://github.com/adityavag"><RxGithubLogo className='hover:text-cyan-500 hover:cursor-pointer' /></a>
                    <a href="https://www.linkedin.com/in/adityacse"><RxLinkedinLogo className='ml-4 hover:text-cyan-500 hover:cursor-pointer' /></a>
                    <a href="https://twitter.com/aditya_vagarwal"><RxTwitterLogo className='ml-4 hover:text-cyan-500 hover:cursor-pointer' /></a>
                </span>
            </div>

            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">Skills</h2>
                {/* <p className="mb-4 text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure molestias officiis temporibus blanditiis placeat. Ipsum eius velit omnis exercitationem, quo assumenda recusandae iusto aliquam blanditiis nihil deleniti eum! Veritatis voluptatem soluta dolores, voluptas dolore deleniti cumque molestiae qui mollitia neque porro sequi eos natus aperiam, non rerum. Dolores aut sint quis dolor dignissimos consectetur itaque, impedit asperiores facilis ex!
                </p> */}
                <Skills className="mb-4"/>
            </div>

            <div className="lg:grid lg:grid-cols-1 content-center max-lg:flex max-lg:flex-col mb-10">
                <h2 className="mb-2 tracking-wide break-normal font-bold">Experience</h2>
                <Experience/>
            </div>
        </div>

    );
}

export default Right;