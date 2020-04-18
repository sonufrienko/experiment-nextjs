import { gql } from 'apollo-boost';

export const AllPlaces = gql`
  query AllPlaces($limit: Int, $nextToken: String) {
    allPlaces(limit: $limit, nextToken: $nextToken) {
      items {
        placeId
        name
        type
        description
        address {
          countryCode
          city
          line1
          postalCode
          state
        }
        location {
          latitude
          longitude
        }
        openingHours {
          open {
            day
            time
          }
          close {
            day
            time
          }
        }
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
      type
        description
        address {
          countryCode
          city
          line1
          postalCode
          state
        }
        location {
          latitude
          longitude
        }
        openingHours {
          open {
            day
            time
          }
          close {
            day
            time
          }
        }
    }
  }
`;