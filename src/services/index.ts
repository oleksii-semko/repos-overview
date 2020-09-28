export const processRepositoriesData = (data: any): object[] => {
    let result: object[] = [];

    data.search.edges.map((edge: any, index:number) => {
        edge.node.nodeIndex = index;
        return result.push(edge.node);
    });

    return result;
}

export const getReposTableColumnsMap = (): object[] => [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Stars',
    dataIndex: 'stargazerCount',
    key: 'stargazerCount',
  },
  {
    title: 'Forks',
    dataIndex: 'forkCount',
    key: 'forkCount',
  },
];
