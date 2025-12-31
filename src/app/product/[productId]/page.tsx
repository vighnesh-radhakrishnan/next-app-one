import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `${id}`,
  };
};
export default async function ProductIds({ params }: Props) {
  const prodId = (await params).productId;

  return <h1>Product Id: {prodId}</h1>;
}
