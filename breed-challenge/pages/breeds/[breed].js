import React from "react";
import Layout from "../../components/Layout";
import BreadCards from "../../components/BreadCards";

export default function Breed({ data, breed }) {
  return (
    <Layout>
      <BreadCards images={data} alt={breed} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const breed = context.params.breed;
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data,
      breed,
    },
  };
}
