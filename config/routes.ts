export default [
  {
    path: '/base',
    exaact: true,
    component: './home/login',
  },
  {
    path: '/',
    exact: true,
    component: './home/homePage',
  },
  {
    path: '/',
    // component: '../layouts/BasicLayout',
    // component: '../layouts/TLayout',
    component: '../layouts/BLayout',
    // redirect: '/base',
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: './home/dashboard',
        // component: '../layouts/BasicLayout',
        // routes: [{ path: '/', component: './welcome/hello' }],
      },
      {
        path: '/admin',
        routes: [
          { path: '/admin', exact: true, redirect: '/admin/studentManagement' },
          {
            path: '/admin/studentManagement',
            exact: true,
            component: './admin/studentManagement',
          },
          {
            path: '/admin/teacherManagement',
            exact: true,
            component: './admin/teacherManagement',
          },
          {
            path: '/admin/academicAdministrator',
            exact: true,
            component: './admin/academicAdministrator',
          },
          {
            path: '/admin/adminManagement',
            exact: true,
            component: './admin/adminManagement',
          },
        ],
      },
      {
        path: '/administration',
        routes: [
          { path: '/administration', exact: true, redirect: '/administration/history_all' },
          {
            path: '/administration/history_all',
            exact: true,
            component: './administration/history_all',
          },
          {
            path: '/administration/unfinished_all',
            exact: true,
            component: './administration/unfinished_all',
          },
          {
            path: '/administration/release',
            exact: true,
            component: './administration/release',
          },
          {
            path: '/administration/template',
            exact: true,
            component: './administration/template',
          },
        ],
      },
      {
        path: '/teacher',
        routes: [
          { path: '/teacher', exact: true, redirect: '/teacher/browse' },
          {
            path: '/teacher/browse',
            exact: true,
            component: './teacher/browse',
          },
        ],
      },
      {
        path: '/student',
        routes: [
          { path: '/student', exact: true, redirect: '/student/myEvaluation' },
          {
            path: '/student/myEvaluation',
            exact: true,
            component: './student/myEvaluation',
          },
          {
            path: '/student/evaluate',
            exact: true,
            component: './student/evaluate',
          },
        ],
      },
      // {
      //   path: './evaluate'
      // },
      {
        path: '/management',
        routes: [
          { path: '/management', exact: true, redirect: '/management/page1' },
          {
            path: '/management/page1',
            exact: true,
            component: './management/page1',
          },
          {
            path: '/management/page2',
            exact: true,
            component: './management/page2',
          },
          {
            path: '/management/page3',
            exact: true,
            component: './management/page3',
          },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/list',
        routes: [
          { path: '/list', exact: true, redirect: '/list/list1' },
          {
            path: '/list/list1',
            exact: true,
            component: './list/list1',
          },
          { path: '/list/list2', exact: true, component: './list/list2' },
          { path: '/list/list3', exact: true, component: './list/list3', wrappers: ['@/wrappers/list/list3'], },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/welcome',
        routes: [
          { path: '/welcome', exact: true, redirect: '/welcome/square' },
          {
            path: '/welcome/hello',
            exact: true,
            title: 'Welcome',
            component: './welcome/hello',
          },
          {
            path: '/welcome/square',
            exact: true,
            title: 'Welcome',
            component: './welcome/square',
          },
          { component: '@/pages/404' },
        ],
      },
      { component: '@/pages/404' },
    ],
  },
];
