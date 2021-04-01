import React, { useEffect } from "react";
import Link from 'next/link';

const ProductPage = ({ data }) => {
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log('data=', data);
  }, [])

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>Data example </div>
    
    </>
  )
}

export default ProductPage;