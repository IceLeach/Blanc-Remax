import ProTable, { ProColumns, TableDropdown } from '@ant-design/pro-table';
import { Button, Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined, DownOutlined } from '@ant-design/icons';
import React from 'react';

export type Status = {
  color: string;
  text: string;
};
const valueEnum: any = {
  0: { color: 'blue', text: '进行中' },
  1: { color: 'green', text: '已完成' },
  2: { color: 'volcano', text: '警告' },
  3: { color: 'red', text: '失败' },
  4: { color: '', text: '未完成' },
};
type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: Status;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];
const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
for (let i = 0; i < 5; i++) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}
console.log(tableListDataSource);
const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 230,
    dataIndex: 'name',
    align: 'center',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 230,
    dataIndex: 'status',
    align: 'center',
    render: (_, record) => (
      <Tag color={record.status.color}>{record.status.text}</Tag>
    ),
  },
  {
    title: '容器数量',
    width: 230,
    dataIndex: 'containers',
    align: 'center',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    width: 230,
    dataIndex: 'creator',
    align: 'center',
    // valueEnum: {
    //     all: { text: '全部' },
    //     付小小: { text: '付小小' },
    //     曲丽丽: { text: '曲丽丽' },
    //     林东东: { text: '林东东' },
    //     陈帅帅: { text: '陈帅帅' },
    //     兼某某: { text: '兼某某' },
    // },
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 300,
    key: 'since',
    dataIndex: 'createdAt',
    align: 'center',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    align: 'center',
    render: () => [
      <a key="1">链路</a>,
      <a key="2">报警</a>,
      <a key="3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];
const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        // console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{ showQuickJumper: true }}
      expandable={{ expandedRowRender }}
      dateFormatter="string"
      headerTitle="嵌套表格"
      search={false}
      // toolBarRender={false}
      options={false}
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
    />
  );
};
