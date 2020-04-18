import { gql } from 'apollo-boost';

export const CreatePlace = gql`
  mutation CreatePlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      placeId
      name
    }
  }
`;