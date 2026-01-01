"use client";
import { use } from "next";
import { useRouter } from "next/navigation";
type Props = {
  params: Promise<{ productId: string }>;
};

export default function ProductIds({ params }: Props) {
  const prodId = use(params).productId;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${prodId}`);
  };

  return (
    <>
      <h1>Product Id: {prodId}</h1>
      <button onClick={handleClick}>Product click</button>
    </>
  );
}
