import React from "react";

const About = () => {
  return (
    <section className="max-w-screen-sm px-10 xl:px-0 text-sm md:text-base">
      <div>
        This is an imaginary NFT Collection website built for practice purposes.
        Mock data is generated from{" "}
        <a
          href="https://www.mockaroo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary"
        >
          mockaroo
        </a>{" "}
        & images are from{" "}
        <a
          href="https://www.mockaroo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary"
        >
          RoboHash.
        </a>{" "}
      </div>

      <h2 className="mt-8 mb-4">Technologies used:</h2>
      <ul>
        <li>- nextjs</li>
        <li>- tailwind css</li>
        <li>- graphql</li>
        <li>- type-graphql</li>
        <li>- graphql-request</li>
        <li>- react-query</li>
        <li>- apollo-server-micro</li>
      </ul>
    </section>
  );
};

export default About;
