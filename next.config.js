module.exports = {
  target: 'serverless',
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    GRAPHQL_API_KEY: process.env.GRAPHQL_API_KEY
  },
};
