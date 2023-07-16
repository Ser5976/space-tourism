import './globals.css';
import Head from 'next/head';
import { barlow } from '../fonts/fonts';
import Navbar from '@/components/navbar/Navbar';
import { GlobalContext } from '@/context/GlobalContext';
import BurgerMenu from '@/components/navbar/burger_menu/BurgerMenu';

export const metadata = {
  title: 'Space tourism website',
  description: 'Frontend Mentor, challenge space tourism website ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <body className={`${barlow.className} `}>
        <GlobalContext>
          <div className="wrapper">
            <div className="page">
              <Navbar />
              {children}
              <BurgerMenu />
            </div>
          </div>
        </GlobalContext>
      </body>
    </html>
  );
}
