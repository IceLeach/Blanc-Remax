import ProTable, { ProColumns } from "@ant-design/pro-table";
import React from "react";

interface unfinishedAllColumns {
  id?: string;
  course?: string;
  teacher?: string;
  startTime?: string;
  endTime?: string;
}

const unfinishedAll = () => {

  const columns: ProColumns<unfinishedAllColumns>[] = [
    {
      title: '评价表ID',
      dataIndex: 'id',
      // hideInForm: true,
    },
    {
      title: '课程',
      dataIndex: 'course',
    },
    {
      title: '任课教师',
      dataIndex: 'teacher',
      // search: false,
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      valueType: 'dateTime',
      search: false,
      // hideInForm: true,
      // renderText: (data: StateDto) => data.displayName,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a onClick={() => { }}>详细</a>,
      ],
    },
  ];

  return (
    <>
      <ProTable
        columns={columns}
        request={() => Promise.resolve({
          data: [],
          success: true,
        })}
        search={{
          defaultCollapsed: false,
          collapseRender: () => <></>,
        }}
      />
      <div>unfinished_all</div>
    </>
  );
}

export default unfinishedAll;