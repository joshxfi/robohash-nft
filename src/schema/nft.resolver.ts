import { Resolver, Query } from "type-graphql";

import { Nft } from "./nft";
import nfts from "./nfts.json";

@Resolver()
export class NftResolver {
  @Query(() => [Nft])
  nfts() {
    return nfts;
  }
}
