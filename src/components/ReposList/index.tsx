import React from 'react';
import { Table, Alert } from 'antd';
import Spinner from '../Spinner';
/** Hooks, Services */
import { useQuery } from 'graphql-hooks';
import { processRepositoriesData, getReposTableColumnsMap } from '../../services/index';
/** Constants */
import { SEARCH_REACT_LIBS_QUERY } from '../../constants/queries';
/** Styles */
import 'antd/dist/antd.css';

const ReposList: React.FC = () => {
  const { loading, error, data } = useQuery(SEARCH_REACT_LIBS_QUERY)

  if (loading) return <Spinner message="Loading repositories list..." />;
  if (error) return <Alert
    message="Server is too busy"
    description="We are working hard to prepare repositories list for you. Please try to reload page one more time"
    type="info"
    showIcon={true}
  />;

  const dataSource = processRepositoriesData(data);
  const columnsMap = getReposTableColumnsMap();

  return <Table dataSource={dataSource} columns={columnsMap}  rowKey="nodeIndex" />;
}

export default ReposList;
