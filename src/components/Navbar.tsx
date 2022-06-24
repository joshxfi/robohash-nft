import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRobot } from "react-icons/fa";

export const Navbar = () => {
  const { push } = useRouter();

  const handleBuy = () => {
    const random = Math.floor(Math.random() * 99) + 1;
    push(`/nft/${random}`);
  };

  return (
    <nav className="font-serif flex items-center justify-between flex-col md:flex-row pb-4 pt-6 lg:mb-12 mb-8 border-b w-full max-w-screen-xl mx-auto border-tertiary px-10 xl:px-0">
      <Link href="/">
        <a className="flex items-center text-xl space-x-2 mb-4 md:mb-0">
          <FaRobot className="text-2xl text-primary" />
          <h1>RoboHash Collection</h1>
        </a>
      </Link>

      <div className="space-x-8 text-sm md:text-base">
        <Link href="/">
          <a className="link">NFT</a>
        </Link>

        <Link href="/about">
          <a className="link">About</a>
        </Link>

        <a
          className="link"
          href="https://github.com/joshxfi/robohash-nft"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>

        <button
          onClick={handleBuy}
          className="bg-primary px-8 font-mono py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Buy NFT
        </button>
      </div>
    </nav>
  );
};
