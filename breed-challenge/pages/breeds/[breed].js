import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function Breed({ data}) {
    console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const breed = context.params.breed
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
