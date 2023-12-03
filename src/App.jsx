import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube, FaReact } from "react-icons/fa";
import projects from "./assets/projects.json";
import Card from "./components/Card";
import Skill from "./components/Skill";
export default function App() {

  return (
    <div className="bg-[#151515] min-h-screen p-16 text-white lg:px-64">
      <div>
        <div>
          <div className="text-3xl mb-4">
            <b>Aditya</b> Vardhan Agarwal
          </div>
          <div className="flex flex-row space-x-5">
            <a href="https://www.linkedin.com/in/adityacse/"><FaLinkedinIn className="hover:cursor-pointer" /></a>
            <a href="https://github.com/adityavag/"><FaGithub className="hover:cursor-pointer" /></a>
            <a href="https://twitter.com/aditya_vagarwal"><FaTwitter className="hover:cursor-pointer" /></a>
          </div>
          <div className="flex flex-row-reverse max-lg:grid max-lg:grid-cols-1">
            <div className="mt-4 mb-4 leading-relaxed">
              I am a third year Undergraduate Student pursuing bachelor's in Computer Science at SRM Institute of Science & Technology. Throughout my academic journey, I have acquired a solid understanding of programming languages such as C, C++, and Java. Additionally, I have gained practical experience in developing web applications levearging industry popular frameworks like React and Spring Boot. I value leaning and aspire to bring value-creating transformation in tech-sphere. Currently I'am looking for intern roles in order to gain valuable industrial experience.
            </div>
          </div>
        </div>

      </div>
      <div>
        <div className="font-bold text-xl">Projects</div>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
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
        </div>
      </div>

      <div>
        <div className="font-bold text-xl mt-8">Skills</div>
        <div className="mt-6">
          <Skill />
        </div>
      </div>
    </div>
  )
}

