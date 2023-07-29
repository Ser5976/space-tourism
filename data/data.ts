import { IHeaderLinks, IDestinationLinks, ICrewLinks } from '@/types/types';

export const headerLinks: IHeaderLinks[] = [
  { link: 'home', number: '00', href: '/' },
  { link: 'destination', number: '01', href: '/destination' },
  { link: 'crew', number: '02', href: '/crew' },
  { link: 'technology', number: '03', href: '/technology' },
];
export const destinationLinks: IDestinationLinks[] = [
  { link: 'moon', href: '/destination' },
  { link: 'mars', href: '/destination/mars' },
  { link: 'europa', href: '/destination/europa' },
  { link: 'titan', href: '/destination/titan' },
];
export const crewLinks: ICrewLinks[] = [
  { href: '/crew' },
  { href: '/crew/specialist' },
  { href: '/crew/pilot' },
  { href: '/crew/flight_engineer' },
];
