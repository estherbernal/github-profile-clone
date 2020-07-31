import { gql } from '@apollo/client'

export const ME = gql`
  {
    viewer {
      login
    }
  }
`

/** Uses one variable to get the
 * user data:
 * @params {string} $username
 * */
export const USER = gql`
  query($username: String!) {
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
      repositories(first: 1) {
        totalCount
      }
    }
  }
`

/** Uses one variable:
 * @params {string} $query: includes the username
 * and the search input value
 */
export const REPOSITORIES_BY_SEARCH = gql`
  query($query: String!) {
    search(query: $query, type: REPOSITORY, first: 30) {
      repositoryCount
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
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
        }
      }
    }
  }
`
