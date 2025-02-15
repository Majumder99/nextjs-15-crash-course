import Link from "next/link";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <>
      <h1>Article {articleId}</h1>
      <p>Language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>EN</Link>
        <Link href={`/articles/${articleId}?lang=es`}>ES</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>FR</Link>
      </div>
    </>
  );
};

export default NewsArticle;
