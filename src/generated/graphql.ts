import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Nft = {
  __typename?: 'Nft';
  collection_num: Scalars['Float'];
  description: Scalars['String'];
  eth_address: Scalars['String'];
  favorites: Scalars['Float'];
  id: Scalars['ID'];
  img: Scalars['String'];
  owner: Scalars['String'];
  price: Scalars['Float'];
  views: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  nfts: Array<Nft>;
};

export type GetNftsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNftsQuery = { __typename?: 'Query', nfts: Array<{ __typename?: 'Nft', id: string, img: string, collection_num: number, price: number }> };


export const GetNftsDocument = gql`
    query getNfts {
  nfts {
    id
    img
    collection_num
    price
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getNfts(variables?: GetNftsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNftsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftsQuery>(GetNftsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNfts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
