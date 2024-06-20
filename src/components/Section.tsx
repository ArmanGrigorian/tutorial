import Link from "next/link";

const Section = ({ heading, articles }: SectionProps) => {
  return (
    <section className="py-4">
      <h4
        className="mb-4 w-fit rounded bg-yellow-300 p-4 text-2xl font-semibold shadow"
        title={heading.title && heading.title}
      >
        {heading.text}
      </h4>
      <ol
        className={`grid items-start justify-around gap-4 [grid-template-columns:repeat(auto-fit,minmax(308px,432px))]`}
      >
        {articles.map((article) => (
          <li
            key={crypto.randomUUID()}
            className="w-[min(100%,432px)] rounded bg-neutral-50 p-2 shadow transition hover:-translate-y-0.5"
          >
            <Link
              className="block text-base font-medium"
              href={article.href}
              title={article.title && article.title}
            >
              {article.heading}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Section;
