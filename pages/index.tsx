import type { NextPage } from "next";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getNfts } from "../src/api";

const Home: NextPage = () => {
  const { data } = useQuery(["nfts"], () => getNfts());

  return (
    <section>
      <div>{JSON.stringify(data)}</div>
    </section>
  );
};

export async function getServerSideProps() {
  await queryClient.prefetchQuery("nfts", () => getNfts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
