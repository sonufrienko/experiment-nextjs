import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const PlaceDetails = () => {
  const route = useRouter();
  const {
    query: { placeId },
  } = route;

  return (
    <Layout>
        <>
          <h1>{placeId}</h1>
        </>
    </Layout>
  );
};

export default PlaceDetails;
