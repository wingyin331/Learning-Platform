import React from "react";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import { config, library } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import {
  faHome,
  faInfoCircle,
  faUser,
  faBookmark,
  faSignOutAlt,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(
  faHome,
  faInfoCircle,
  faUser,
  faYoutube,
  faBookmark,
  faSignOutAlt,
  faCaretDown
);

const authToken = process.env.HASURA_GRAPHQL_JWT_SECRET;
const adminSecret = `Megan90591`;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://teach-yourself-code-hasura.herokuapp.com/v1/graphql",
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-hasura-admin-secret": `${adminSecret}`
      }
    }),
    cache: new InMemoryCache()
  });
};

const client = createApolloClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
