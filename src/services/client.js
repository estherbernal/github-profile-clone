import ApolloClient from 'apollo-boost'

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: async (operation) => {
      const token = localStorage.getItem('token')

      operation.setContext({
        headers: {
          authorization: token ? `token ${token}` : '',
        },
      })
    },
    onError: ({ networkError }) => {
      const path = window.location.pathname
      if (networkError?.statusCode === 401 && path !== '/') {
        localStorage.removeItem('token')
        window.location.reload()
      }
    },
  })
}
