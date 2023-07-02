import { IHeaderLinks, IDestinationLinks } from '@/types/types';

export const headerLinks: IHeaderLinks[] = [
  { link: 'home', number: '00', href: '/' },
  { link: 'destination', number: '01', href: '/destination' },
  { link: 'crew', number: '02', href: '/crew' },
  { link: 'technology', number: '03', href: '/technology' },
];
export const destinationLinks: IDestinationLinks[] = [
  { link: 'moon', href: '/destination' },
  { link: 'mars', href: '/destination/mars' },
  { link: 'europa', href: '/destenition/europa' },
  { link: 'titan', href: '/destination/titan' },
];
