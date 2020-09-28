export const SEARCH_REACT_LIBS_QUERY = `query {
    search(query: "react in:name,description,readme fork:false language:JavaScript stars:>50", type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            name
            stargazerCount
            forkCount
          }
        }
      }
    }
  }`;
