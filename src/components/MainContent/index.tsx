import React from 'react';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import ReposList from '../ReposList';
import * as config from './../../config/config.json';

const client = new GraphQLClient(
  {
    url: config.api.url,
    useGETForQueries: config.api.useGet,
    headers: config.api.headers
  }
);

const MainContent: React.FC = () => {
  return (
    <main>
      <ClientContext.Provider value={client}>
        <ReposList />
      </ClientContext.Provider>
    </main>
  )
};

export default MainContent;
