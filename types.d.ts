type Article = {
	heading: string;
	href: string;
	title?: string;
};

type SectionProps = {
  heading: {
    text: string;
    title: string;
  };
	articles: Article[];
};
