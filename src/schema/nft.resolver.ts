import { Resolver, Query, Arg, ID } from "type-graphql";

import { Nft } from "./nft";
import nfts from "./nfts.json";

@Resolver()
export class NftResolver {
  @Query(() => Nft)
  nft(@Arg("id", () => ID) id: string) {
    const nft = nfts.find((nft) => nft.id.toString() === id);
    if (!nft) {
      throw new Error("NFT not found");
    }

    return nft;
  }

  @Query(() => [Nft])
  nfts() {
    return nfts;
  }
}
