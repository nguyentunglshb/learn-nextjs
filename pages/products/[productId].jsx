import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../contants/utils";

export async function getServerSideProps({ params }) {
  console.log(params);
  const res = await fetch(`${baseUrl}/hrv-product/${params.productId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

function Product({ product }) {
  //   const router = useRouter();
  //   const { productId } = router.query;
  //   const [data, setData] = useState({
  //     listImage: [],
  //     name: "",
  //   });

  return (
    <div>
      Product
      <Head>
        <title>{product.name}</title>
        <meta
          property="og:image"
          content={
            baseUrl + "/attachment/" + product.listImage[0].attachmentKey
          }
        />
        <meta property="og:title" content={product.name} />
      </Head>
      <img
        src={baseUrl + "/attachment/" + product?.listImage[0]?.attachmentKey}
        alt="any"
      />
      <p>{product.name}</p>
    </div>
  );
}

export default Product;
