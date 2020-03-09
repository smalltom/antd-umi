import { Table, Popconfirm, Button } from 'antd';
import React from 'react';

const ProductList = ({ onDelete, onCopy, products }) => {
  const columns = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'DELETE',
      key: 'delete',
      render: (text: any, record: { id: any; }) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
    {
      title: 'COPY',
      key: 'copy',
      render: (text: any, record: { id: any; }) => {
        return (
          <Popconfirm title="Copy?" onConfirm={() => onCopy(record.id)}>
            <Button>Copy</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;