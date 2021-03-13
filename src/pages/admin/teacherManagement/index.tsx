import ProTable, { ProColumns } from "@ant-design/pro-table";
import React from "react";

interface teacherColumns {
  id?: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  state?: string;
  lastLoginDateTime?: string;
}

const teacherManagement = () => {
  const columns: ProColumns<teacherColumns>[] = [
    {
      title: '教师编号',
      dataIndex: 'id',
      // hideInForm: true,
    },
    {
      title: '教师姓名',
      dataIndex: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber',
      search: false,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      search: false,
    },
    {
      title: '状态',
      dataIndex: 'state',
      hideInForm: true,
      // renderText: (data: StateDto) => data.displayName,
    },
    {
      title: '最后登录时间',
      dataIndex: 'lastLoginDateTime',
      valueType: 'dateTime',
      hideInForm: true,
      search: false,
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
      <div>teacherManagement</div>
    </>
  );
}

export default teacherManagement;