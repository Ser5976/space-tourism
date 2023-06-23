import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';

export const bellefair = Bellefair({
  weight: ['400'],
  style: 'normal',
  subsets: [],
  display: 'swap',
  variable: '--font-bellefair',
});
export const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap',
});
export const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow_condensed',
});
