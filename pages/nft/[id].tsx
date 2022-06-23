import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dehydrate, useQuery } from "react-query";
import { FaEthereum, FaTag, FaWallet } from "react-icons/fa";
import { BsEyeFill, BsHeartFill, BsHeart } from "react-icons/bs";

import { getNftById, queryClient } from "../../src/api";

const NFT = ({ id }: { id: string }) => {
  const {
    data: { nft },
  } = useQuery(["nft"], () => getNftById({ id }));

  return (
    <section className="flex space-x-12">
      <div className="border border-tertiary rounded">
        <div className="p-4 flex justify-between items-center border-b border-tertiary">
          <FaEthereum className="text-primary" />

          <div className="flex items-center space-x-2 text-sm">
            <BsHeart className="text-xs mt-[3px]" />
            <p>{nft.favorites}</p>
          </div>
        </div>
        <div className="relative h-[400px] w-[400px] bg-secondary rounded">
          <Image alt="nft art" src={nft.img} layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="text-lg">
        <Link href="/">
          <a className="text-primary">RoboHash</a>
        </Link>

        <h1 className="font-semibold text-4xl mt-5 mb-8">
          RoboHash #{nft.collection_num}
        </h1>

        <ul className="flex space-x-8">
          <li>
            Owned by <span className="text-primary">{nft.owner}</span>
          </li>

          <li className="flex items-center space-x-2">
            <BsEyeFill className="text-[#ccc]" />
            <p>{nft.views} views</p>
          </li>

          <li className="flex items-center space-x-2">
            <BsHeartFill className="text-[#ccc]" />
            <p>{nft.favorites} favorites</p>
          </li>
        </ul>

        <div className="mt-12">
          <p className="text-[#ccc]">Current Price</p>
          <div className="flex items-center space-x-2 text-4xl mt-2">
            <FaEthereum className="text-primary" />
            <p>{nft.price}</p>
          </div>
        </div>

        <div className="mt-8 space-x-4 flex items-center">
          <button className="rounded bg-primary hover:bg-primary/90 transition-colors px-10 py-2 flex items-center space-x-4">
            <FaWallet />
            <p>Buy Now</p>
          </button>

          <button className="rounded bg-[#fafafa] hover:bg-[#fafafa]/80 text-secondary transition-colors px-10 py-2 flex items-center space-x-4">
            <FaTag />
            <p>Make Offer</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  await queryClient.prefetchQuery("nft", () => getNftById({ id: params.id }));

  return {
    props: {
      id: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default NFT;
