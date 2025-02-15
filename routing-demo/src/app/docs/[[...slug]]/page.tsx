export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <>
      <h1>Docs</h1>
      <p>Slug: {slug ? slug.join("/") : "Nothing"}</p>
    </>
  );
}
