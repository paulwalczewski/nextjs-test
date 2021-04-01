import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

const ProductPage = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log('data');

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>Test my ProductPage! id={id}</div>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={300}
      />
    </>
  )
}

export async function getStaticProps() {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data }
  }
}

export default ProductPage;