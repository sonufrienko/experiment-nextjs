import { NextPage } from 'next';
import Head from 'next/head';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PageHeader } from 'antd';
import withApollo from '../lib/withApollo';
import Layout from '../components/Layout';
import PlaceList from '../components/PlaceList';
import { queries } from '../graphql';

const ALL_PLACES_LIMIT = 1;

interface Place {
  placeId: number;
  name: string;
}

interface AllPlaces {
  items: Place[];
  nextToken: string;
}

interface IndexPageProps {
  data: {
    allPlaces: AllPlaces;
  };
  apollo: ApolloClient<NormalizedCacheObject>;
}

const IndexPage: NextPage<any> = (props: IndexPageProps) => {
  const { data: serverData, apollo } = props;

  const { loading, error, data: clientData, refetch, fetchMore } = useQuery(queries.AllPlaces, {
    variables: {
      limit: ALL_PLACES_LIMIT,
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log({
    serverData,
    clientData,
  });

  const onLoadMore = () => {
    fetchMore({
      variables: {
        nextToken: clientData?.allPlaces?.nextToken,
      },
      updateQuery: (currentData: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return currentData;

        const res = {
          allPlaces: {
            items: [...currentData.allPlaces.items, ...fetchMoreResult.allPlaces.items],
            nextToken: fetchMoreResult.allPlaces.nextToken,
            __typename: fetchMoreResult.allPlaces.__typename,
          },
        };

        return res;
      },
    });
  };

  const data = clientData || serverData;
  const list = data?.allPlaces?.items;
  const hasMore = !!data?.allPlaces?.nextToken;
  const isLoading = loading && !!clientData;

  return (
    <Layout>
      <Head>
        <title>Real Place - Next.js app</title>
      </Head>
      <PageHeader className="site-page-header" title="Places" />
      <PlaceList list={list} onLoadMore={onLoadMore} loading={isLoading} hasMore={hasMore} />
    </Layout>
  );
};

IndexPage.getInitialProps = async (ctx: any) => {
  const { data } = await ctx.apolloClient.query({
    query: queries.AllPlaces,
    variables: {
      limit: ALL_PLACES_LIMIT,
    },
  });
  return { data };
};

export default withApollo(IndexPage);
