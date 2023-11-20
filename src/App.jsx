import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import Card from "./components/Card";

export default function App() {

  return (
    <div className="bg-[#151515] min-h-screen p-16 font-code text-white">
      <div>
        <div className="text-3xl mb-4">
          <b>Aditya</b> Vardhan Agarwal
        </div>
        <div className="flex flex-row space-x-5">
          <FaLinkedinIn className="hover:text-blue-500 hover:cursor-pointer" />
          <FaGithub className="hover:text-blue-300 hover:cursor-pointer" />
          <FaTwitter className="hover:text-blue-500 hover:cursor-pointer" />
          <FaYoutube className="hover:text-red-600 hover:cursor-pointer" />
        </div>
      </div>
      <div>
        {/* about.txt */}
        <div className="mt-8 mb-4">
        I am currently pursuing a Computer Science undergraduate degree at SRM Institute of Science & Technology. Throughout my academic journey, I have acquired a solid understanding of programming languages such as C, C++, and Java. Additionally, I have gained practical experience in developing web applications. Currently, I am actively exploring the Spring Framework. Looking for intern roles in order to gain valuable industrial experience.
        </div>
        {/* exp.txt */}

        {/* projects.txt */}
        <div className="font-bold text-xl">Projects</div>
        <div className="flex flex-row space-x-4 max-lg:grid max-lg:grid-cols-1 max-lg:justify-center">
          {/* <Card/> */}
          <Card title = "Web Watch Dog" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum tenetur quia nihil, repudiandae ipsum laborum expedita suscipit assumenda odio placeat sit eum."/>

          <Card title = "RegExGrapher" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum tenetur quia nihil, repudiandae ipsum laborum expedita suscipit assumenda odio placeat sit eum."/>
        </div>
      </div>
    </div>
  )
}

