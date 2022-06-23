import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Nft {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  img: string;

  @Field(() => String)
  owner: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  collection_num: number;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  views: number;

  @Field(() => Number)
  favorites: number;

  @Field(() => String)
  eth_address: string;
}
