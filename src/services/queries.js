import { gql } from '@apollo/client'

export const ME = gql`
  {
    viewer {
      login
    }
  }
`

/** Uses two variables:
 * @params {string} $username
 * @params {number} $quantity
 * */
export const USER = gql`
  query($username: String!, $quantity: Int!) {
    user(login: $username) {
      name
      login
      avatarUrl
      bio
      location
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      repositories(
        first: $quantity
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          name
          #nameWithOwner
          createdAt
          updatedAt
          description
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            totalCount
            totalSize
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

/** Uses one variable
 *  * @params {string} $inputValue
 */
export const USERS_BY_USERNAME = gql`
  query($inputValue: String!) {
    search(query: $inputValue, type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
            location
            company
          }
        }
      }
    }
  }
`

/** Uses one variable
 *  * @params {string} $inputValue
 */
export const USERS_BY_TEXT = gql`
  query($inputValue: String!) {
    search(query: $inputValue, type: USER, last: 10) {
      userCount
      edges {
        node {
          __typename
          ... on User {
            id
            login
            name
            avatarUrl
          }
        }
        textMatches {
          fragment
          property
          highlights {
            text
          }
        }
      }
    }
  }
`

export const USERS_FROM_MUNICH = gql`
  {
    search(query: "location:munich", type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
            location
            email
            company
          }
        }
      }
    }
  }
`
