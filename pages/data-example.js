import React from "react";
import Link from 'next/link';

const ProductPage = ({ data }) => {
  console.log('data', data);

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>Data example </div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data }
  }
}

export default ProductPage;