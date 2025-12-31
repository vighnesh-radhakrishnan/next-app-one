export default async function ProductIds({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Product Id: {productId}: {reviewId}
    </h1>
  );
}
