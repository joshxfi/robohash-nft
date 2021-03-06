import type { NextPage } from "next";
import { dehydrate, useQuery } from "react-query";
import { FaEthereum } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

import { queryClient, getNfts } from "../src/api";

const Home: NextPage = () => {
  const { data } = useQuery(["nfts"], () => getNfts());

  return (
    <section>
      <ul className="xl:grid grid-cols-5 gap-2 flex flex-wrap justify-center">
        {data?.nfts.map((nft) => (
          <li
            key={nft.id}
            className="lg:w-[250px] w-[210px] bg-secondary rounded justify-self-center"
          >
            <Link href={`/nft/${encodeURIComponent(nft.id)}`}>
              <a>
                <div className="relative lg:h-[250px] lg:w-[250px] h-[200px] w-[200px]">
                  <Image
                    alt="nft art"
                    src={nft.img}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform"
                  />
                </div>
                  <div className='p-4'>
                <h2 className='mt-2 mb-4'>RoboHash #{nft.collection_num}</h2>
                <div>
                  <h3 className='text-sm'>Price</h3>
                  <div className='flex items-center space-x-1 text-lg font-medium'>
                    <FaEthereum className='text-primary' />
                    <p>{nft.price}</p>
                  </div>
                </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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
