import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

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
        {/* exp.txt */}
        {/* projects.txt */}
      </div>
    </div>
  )
}

