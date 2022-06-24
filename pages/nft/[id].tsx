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
    <section className="flex flex-col lg:flex-row items-center lg:space-x-12 w-[400px] lg:w-full mx-auto lg:px-10">
      <div className="border border-tertiary rounded w-[400px] mb-8 lg:mb-0">
        <div className="p-4 flex justify-between items-center border-b border-tertiary">
          <FaEthereum className="text-primary" />

          <div className="flex items-center space-x-2 text-sm">
            <BsHeart className="text-xs mt-[3px]" />
            <p>{nft.favorites}</p>
          </div>
        </div>
        <div className="relative h-[400px] bg-secondary rounded">
          <Image alt="nft art" src={nft.img} layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="lg:text-lg">
        <Link href="/">
          <a className="text-primary">RoboHash</a>
        </Link>

        <h1 className="font-semibold text-3xl lg:text-4xl mt-5 mb-8">
          RoboHash #{nft.collection_num}
        </h1>

        <ul className="flex lg:space-x-8 flex-col lg:flex-row space-y-2 lg:space-y-0">
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
          <div className="flex items-center space-x-2 text-3xl lg:text-4xl mt-2">
            <FaEthereum className="text-primary" />
            <p>{nft.price}</p>
          </div>
        </div>

        <div className="mt-8 space-x-2 lg:space-x-4 flex items-center text-sm lg:text-base">
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
