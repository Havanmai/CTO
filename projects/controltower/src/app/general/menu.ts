export const MenuSideBar = [
  {
    title: 'Tổng quan',
    icon: 'dashboard.svg',
   routerLink: '/controltower/report-chart',
  /*  routerLink: '/report-chart', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Quản lý tài khoản',
    icon: 'user.svg',
    routerLink: '/controltower/accounts',
    //routerLink: '/accounts',
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Chi tiết KPI toàn trình',
    icon: 'Vector (3).svg',
    routerLink: '/controltower/KPI',
   /* routerLink: '/KPI', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Chi tiết KPI phân đoạn',
    icon: 'Vector (3).svg',
    routerLink: '/controltower/KPI-segment',
   /* routerLink: '/KPI', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Cấu hình cảnh báo',
    icon: 'Vector (4).svg',
    routerLink: '/controltower/warning-config',
    /* routerLink: '/warning-config', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Cảnh báo mất hàng',
    icon: 'Vector (4).svg',
    routerLink: '/controltower/loss-warning',
    /* routerLink: '/warning-config', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
  },
  {
    title: 'Chăm sóc khách hàng',
    icon: 'Vector (4).svg',
    /* routerLink: '/warning-config', */
    permission: ['menu:dashboard'],
    keyword: 'dashboard',
    children:[
      {
        title: 'Tổng quan',
        icon: 'Vector (5).svg',
        routerLink: '/controltower/report',
        /* routerLink: '/report', */

        permission: ['menu:dashboard'],
        keyword: 'dashboard',
      },
      /* {
        title: 'Tài Khoản eVTP',
        icon: 'permission.svg',
        routerLink: '/controltower/evtp',

        permission: ['menu:dashboard'],
        keyword: 'dashboard',
      }, */
      {
        title: 'Báo cáo doanh thu',
        icon: 'permission.svg',
        routerLink: '/controltower/report-sales',
        /* routerLink: '/evtp', */
        permission: ['menu:dashboard'],
        keyword: 'dashboard',
      },
      {
        title: 'Báo cáo sản lượng',
        icon: 'permission.svg',
        routerLink: '/controltower/report-quantity',
        /* routerLink: '/evtp', */
        permission: ['menu:dashboard'],
        keyword: 'dashboard',
      }
    ]
  },

];
