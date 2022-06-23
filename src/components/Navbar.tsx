import React from "react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="font-serif flex items-center justify-between flex-wrap pb-4 pt-6 mb-12 border-b w-full max-w-screen-xl mx-auto border-[#3d3d3d]">
      <div className="flex items-center text-xl space-x-4">
        <FaRobot className="text-2xl text-primary" />
        <h1>RoboHash Collection</h1>
      </div>

      <div className="space-x-8">
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
      </div>
    </nav>
  );
};
