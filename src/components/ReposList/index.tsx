import React from 'react';
import { Table } from 'antd';
/** Hooks, Services */
import { useQuery } from 'graphql-hooks';
import { processRepositoriesData, getReposTableColumnsMap } from '../../services/index';
/** Constants */
import { SEARCH_REACT_LIBS_QUERY } from '../../constants/queries';
/** Styles */
import 'antd/dist/antd.css';

const ReposList: React.FC = () => {
  const { loading, error, data } = useQuery(SEARCH_REACT_LIBS_QUERY)

if (loading) return (<div>{"loading..."}</div>);
  if (error) return (<div>{"error..."}</div>);

  const dataSource = processRepositoriesData(data);
  const columnsMap = getReposTableColumnsMap();

  return (<Table dataSource={dataSource} columns={columnsMap}  rowKey="nodeIndex" />);
}

export default ReposList;
