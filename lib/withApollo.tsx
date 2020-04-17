import getConfig from 'next/config';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const { publicRuntimeConfig } = getConfig();
const { GRAPHQL_API_URL, GRAPHQL_API_KEY } = publicRuntimeConfig;

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: GRAPHQL_API_URL,
      headers: {
        'x-api-key': GRAPHQL_API_KEY,
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
