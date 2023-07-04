import Image from "next/image";

const Experience = ({ logoSrc, companyName, role, duration, exp1, exp2, exp3 }) => {
  return (
    <div className="bg-[#202022] p-6 flex  text-[#C4BFB7]">
      <Image className="w-12 h-12  rounded-full mr-6" src={logoSrc} alt={`${companyName} Logo`} />
      <div>
        <h2 className="text-lg font-bold">{companyName}</h2>
        <p className="mb-2">{role}</p>
        <p className="">{duration}</p>
        <ul className="list-disc">
          <li><p>{exp1}</p></li>
          <li><p>{exp2}</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;