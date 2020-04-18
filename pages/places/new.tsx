import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { PageHeader } from 'antd';
import withApollo from '../../lib/withApollo';
import Layout from '../../components/Layout';
import { mutations } from '../../graphql';
import PlaceEditForm from '../../components/PlaceEditForm';

const NewPlacePage: NextPage<any> = () => {
  const [createPlace, { data }] = useMutation(mutations.CreatePlace);

  const handleCreatePlace = async (values: any) => {
    const {
      data: {
        createPlace: { placeId },
      },
    } = await createPlace({
      variables: {
        input: values,
      },
    });

    Router.push('/places/[placeId]', `/places/${placeId}`);
  };

  const initialValues = {
    name: '',
    type: '',
    description: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
  };

  return (
    <Layout>
      <Head>
        <title>Add new place</title>
      </Head>
      <PageHeader className="site-page-header" title="New place" />
      <PlaceEditForm onFinish={handleCreatePlace} initialValues={initialValues} buttonText="Add" />
    </Layout>
  );
};

export default withApollo(NewPlacePage);
