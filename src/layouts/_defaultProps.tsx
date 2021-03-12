import React from 'react';
import {
  SmileOutlined,
  TabletOutlined,
  CrownOutlined,
  HomeOutlined,
  TeamOutlined,
  SettingOutlined,
  HistoryOutlined,
  QuestionCircleOutlined,
  CloudUploadOutlined,
  ProfileOutlined,
  RadarChartOutlined,
  SelectOutlined,
} from '@ant-design/icons';

const IconMap = {
  smile: <SmileOutlined />,
  tablet: <TabletOutlined />,
  crown: <CrownOutlined />,
  home: <HomeOutlined />,
  user: <TeamOutlined />,
  adminSet: <SettingOutlined />,
  history: <HistoryOutlined />,
  unfinished: <QuestionCircleOutlined />,
  release: <CloudUploadOutlined />,
  template: <ProfileOutlined />,
  browse: <RadarChartOutlined />,
  evaluate: <SelectOutlined />,
};
export default {
  route: {
    path: '/',
    name: 'Blanc',
    routes: [
      { path: '/dashboard', name: '欢迎', icon: IconMap.home },

      //系统管理员
      {
        path: '/admin',
        name: '用户管理',
        icon: IconMap.user,
        routes: [
          { path: '/admin/studentManagement', name: '学生管理' },
          { path: '/admin/teacherManagement', name: '教师管理' },
          { path: '/admin/academicAdministrator', name: '教务员管理' },
        ],
      },
      { path: '/admin/adminManagement', name: '管理员信息维护', icon: IconMap.adminSet },

      //教务员
      { path: '/administration/history_all', name: '历史评价', icon: IconMap.history },
      { path: '/administration/unfinished_all', name: '未完成评价', icon: IconMap.unfinished },
      { path: '/administration/release', name: '发布评价', icon: IconMap.release },
      { path: '/administration/template', name: '评价模板', icon: IconMap.template },

      //教师
      { path: '/teacher/browse', name: '查看评价', icon: IconMap.browse },

      //学生
      { path: '/student/myEvaluation', name: '我的评价', icon: IconMap.history },
      { path: '/student/evaluate', name: '课程评价', icon: IconMap.evaluate },

      //测试页
      {
        path: '/management',
        name: '管理页',
        icon: IconMap.crown,
        // access: 'canAdmin',
        // component: './welcome/hello',
        routes: [
          {
            path: '/management/page1',
            name: 'page 1',
            icon: IconMap.crown,
            // component: './welcome/square',
            exact: true,
          },
          {
            path: '/management/page2',
            name: 'page 2',
            icon: IconMap.crown,
            exact: true,
          },
          {
            path: '/management/page3',
            name: 'page 3',
            icon: IconMap.crown,
            exact: true,
          },
        ],
      },
      {
        path: '/list',
        name: '列表页',
        icon: IconMap.tablet,
        // component: './ListTableList',
        routes: [
          {
            path: '/list/list1',
            name: 'list 1',
            icon: <CrownOutlined />,
          },
          {
            path: '/list/list2',
            name: 'list 2',
            icon: <CrownOutlined />,
          },
          {
            path: '/list/list3',
            name: 'list 3',
            icon: <CrownOutlined />,
          },
        ],
      },
    ],
  },
  location: {
    pathname: '',
  },
};

// export default [
//   {
//     path: '/',
//     name: 'welcome',
//     children: [
//       {
//         path: '/welcome',
//         name: 'one',
//         children: [
//           {
//             path: '/welcome/welcome',
//             name: 'two',
//             exact: true,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/demo',
//     name: 'demo',
//   },
// ];
