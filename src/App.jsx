import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import projects from "./assets/projects.json";
import Card from "./components/Card";
import image from "./assets/img.jpg"
export default function App() {

  return (
    <div className="bg-[#151515] min-h-screen p-16 font-code text-white">
      <div>
        <div>
          <div className="text-3xl mb-4">
            <b>Aditya</b> Vardhan Agarwal
          </div>
          <div className="flex flex-row space-x-5">
          <a href="https://www.linkedin.com/in/adityacse/"><FaLinkedinIn className="hover:cursor-pointer" /></a>
          <a href="https://github.com/in/adityavag/"><FaGithub className="hover:cursor-pointer" /></a>
          <a href="https://twitter.com/aditya_vagarwal"><FaTwitter className="hover:cursor-pointer" /></a>
        </div>
          <div className="flex flex-row-reverse max-lg:grid max-lg:grid-cols-1">
            {/* <img
              src={image}
              className="max-w-sm rounded-lg"
            /> */}
            <div className="mt-4 mb-4 leading-relaxed">
              I am currently pursuing a Computer Science undergraduate degree at SRM Institute of Science & Technology. Throughout my academic journey, I have acquired a solid understanding of programming languages such as C, C++, and Java.
              Additionally, I have gained practical experience in developing web applications.
              I've contributed to Bhabha Atomic Resarch Centre - Department of Atomic Energy (DAE) sponsored project.
              I value leaning and aspire to bring value-creating transformation in tech-sphere.
              Currently I'am looking for intern roles in order to gain valuable industrial experience.
            </div>
          </div>
        </div>

      </div>
      <div>
        {/* about.txt */}
        {/* <div className="mt-8 mb-4">
          I am currently pursuing a Computer Science undergraduate degree at SRM Institute of Science & Technology. Throughout my academic journey, I have acquired a solid understanding of programming languages such as C, C++, and Java. Additionally, I have gained practical experience in developing web applications. Currently, I am actively exploring the Spring Framework. Looking for intern roles in order to gain valuable industrial experience.
        </div> */}
        {/* exp.txt */}

        {/* projects.txt */}
        <div className="font-bold text-xl">Projects</div>
        <div className="flex flex-row space-x-4 max-lg:grid max-lg:grid-cols-1 max-lg:justify-center max-lg:space-x-0">
          {/* <Card/> */}
          {projects.map(project => console.log(project.title))}
          {projects.map(project => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}
          {/* <Card title = "Web Watch Dog" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum tenetur quia nihil, repudiandae ipsum laborum expedita suscipit assumenda odio placeat sit eum."/>

          <Card title = "RegExGrapher" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum tenetur quia nihil, repudiandae ipsum laborum expedita suscipit assumenda odio placeat sit eum."/> */}
        </div>
      </div>
    </div>
  )
}

