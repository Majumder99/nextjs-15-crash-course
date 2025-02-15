import FormateData from "@/components/_internal/format-data";

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>This is a blog page</h1>
      <FormateData />
    </>
  );
}
