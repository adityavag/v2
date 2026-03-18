import { HiOutlineExternalLink } from "react-icons/hi";

export default function Card({ title, description, link, tags }) {
    return (
        <article className="line-item">
            <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>

            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
            >
                View Repository
                <HiOutlineExternalLink />
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
