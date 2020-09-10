import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Raja Kumar Panda'
    
  },

  {
    name: 'Admin Information',
    url: '/theme/admininfo',
    icon: 'icon-diamond'
  },
  {
    name: 'Shopper Information',
    url: '/theme/myinfo',
    icon: 'icon-user'
  },
  {
    name: 'Shopper List',
    url: '/theme/shopperlist',
    icon: 'icon-list'
  },
  {
    name: 'Category',
    url: '/theme',
    icon: 'icon-compass',
    children: [
      {
        name: 'Add',
        url: '/theme/categoryadd',
        icon: 'icon-notebook'
      },
      {
        name: 'List',
        url: '/theme/categorylist',
        icon: 'icon-equalizer'
      }
    ]
  },
  {
    name: 'Product',
    url: '/theme',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Add',
        url: '/theme/product',
        icon: 'icon-notebook'
      },
      {
        name: 'List',
        url: '/theme/productlist',
        icon: 'icon-equalizer'
      }
    ]
  },

  {
    name: 'Quantity',
    url: '/theme',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Add',
        url: '/theme/quantity',
        icon: 'icon-notebook'
      },
      {
        name: 'List',
        url: '/theme/quantitylist',
        icon: 'icon-equalizer'
      }
    ]
  },
 

  {
    name: 'Customer',
    url: '/theme/customer',
    icon: 'icon-people'
  },
  {
    name: 'Banner',
    url: '/theme/banneradd',
    icon: 'icon-screen-desktop'
  },
  {
    name: 'Reset Password',
    url: '/theme/resetpass',
    icon: 'icon-key'
  },
  {
    name: 'Settings',
    url: '/theme/settings',
    icon: 'icon-settings'
  }


  
];
