import gql from 'graphql-tag'

/** Uses two variables: $username and $quantity */
export const repositories = gql`
  {
    user(login: "esthersinnick") {
      repositories(first: 10, isFork: false) {
        totalCount
        nodes {
          nameWithOwner
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

/** Uses one variable: $inputValue */
export const users = gql`
  {
    search(query: "$inputValue in:login", type: USER, first: 10) {
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
