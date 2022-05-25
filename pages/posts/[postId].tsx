import { useRouter } from "next/router";
import React from "react";

type Props = {};

function PostDetailPage({}: Props) {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      PostDetailPage
      <h1>Query: {JSON.stringify(router.query)}</h1>
    </div>
  );
}

export default PostDetailPage;
