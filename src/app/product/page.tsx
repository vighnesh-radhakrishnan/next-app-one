"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
type Props = {
  params: Promise<{ productId: string }>;
};

export default function ProductIds({ params }: Props) {
  const Id = use(params);
  const prodId = Id.productId;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <>
      <h1>Product Id: {prodId}</h1>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
