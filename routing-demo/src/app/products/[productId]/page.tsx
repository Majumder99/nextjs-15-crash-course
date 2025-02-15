export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  console.log("productId", productId);
  return (
    <>
      <div>
        <h1>Product Detail Page: {productId}</h1>
      </div>
    </>
  );
}
