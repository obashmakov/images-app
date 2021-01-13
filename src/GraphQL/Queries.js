import { gql } from '@apollo/client';

export const LOAD_IMAGES = gql`
  query getPostList {
    posts(paging: {limit: 12}) {
      items {
        id,
        thumbnail
      }
    }
  }
`;
