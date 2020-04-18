import { gql } from 'apollo-boost';

export const AllPlaces = gql`
  query AllPlaces($limit: Int, $nextToken: String) {
    allPlaces(limit: $limit, nextToken: $nextToken) {
      items {
        placeId
        name
      }
      nextToken
    }
  }
`;

export const Place = gql`
  query Place($placeId: ID!) {
    place(placeId: $placeId) {
      placeId
      name
    }
  }
`;