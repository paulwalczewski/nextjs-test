import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

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

export default ProductPage;