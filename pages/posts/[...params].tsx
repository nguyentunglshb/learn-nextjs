import { useRouter } from "next/router";
import React from "react";

type Props = {};

function ParamsPage({}: Props) {
  const router = useRouter();
  return (
    <div>
      ParamsPage
      <h1>Query: {JSON.stringify(router.query)}</h1>
    </div>
  );
}

export default ParamsPage;
