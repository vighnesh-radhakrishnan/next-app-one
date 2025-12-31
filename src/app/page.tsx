import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/product">Products</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/login">login</Link>
      <Link href="/profile">profile</Link>
    </>
  );
}
