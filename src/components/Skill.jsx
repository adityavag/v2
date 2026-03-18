const skillGroups = {
    Languages: ["C++", "JavaScript", "Java", "Python"],
    Backend: ["Spring Boot", "Node.js", "Express.js", "MySQL", "PostgreSQL"],
    Frontend: ["React", "Tailwind CSS", "HTML", "CSS", "jQuery", "Zustand"],
    DevOps: ["Git", "Docker"]
};

export default function Skill() {
    return (
        <div className="space-y-4">
            {Object.entries(skillGroups).map(([group, items]) => (
                <div key={group} className="line-item py-3 md:grid md:grid-cols-[170px,1fr] md:items-start md:gap-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-zinc-500 md:mb-0">{group}</p>
                    <p className="text-sm leading-relaxed text-zinc-300">{items.join(" · ")}</p>
                </div>
            ))}
        </div>
    );
}
