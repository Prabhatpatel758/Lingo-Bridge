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
    name: 'Book a Slot',
    url: '/default/availableslots',
    icon: 'icon-event',
  },
  {
    divider: true
  },
  {
    name: 'Plan Details',
    url: '/default/plandetails',
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
];
