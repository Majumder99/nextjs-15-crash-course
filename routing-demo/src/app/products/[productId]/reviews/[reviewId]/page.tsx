export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  console.log("productId", productId);
  return (
    <>
      <div>
        <h1>Product Detail Page: {productId}</h1>
        <h2>Review ID: {reviewId}</h2>
      </div>
    </>
  );
}
