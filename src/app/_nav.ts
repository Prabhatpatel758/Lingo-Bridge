import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Lingo-Bridge',
    url: '/default/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Dashboard'
  },
  {
    name: 'Home',
    url: '/default',
    icon: 'icon-home'
  },
  {
    divider: true
  },
  {
    name: 'Profile',
    url: '/default/profile',
    icon: 'icon-user'
  },
  {
    divider: true
  },
  {
    name: 'Wallet',
    url: '/default/wallet',
    icon: 'icon-wallet'
  },
  {
    title: true,
    name: 'Slot Details'
  },
  {
    name: 'Available Slots',
    url: '/default/availableslots',
    icon: 'icon-event',
  },
  {
    divider: true
  },
  {
    name: 'Plan Details',
    url: '/default/charts',
    icon: 'icon-doc'
  },
  {
    divider: true
  },
  {
    name: 'Sessions',
    url: '/default/widgets',
    icon: 'icon-organization',
  },
  {
    divider: true
  },
  {
    name: 'Logout',
    url: '/default/icons',
    icon: 'icon-logout'
  },
  // {
  //   name: 'Icons',
  //   url: '/default/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/default/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/default/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/default/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/default/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },

];
