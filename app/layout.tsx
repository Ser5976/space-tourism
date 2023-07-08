import './globals.css';
import Head from 'next/head';
import { barlow } from '../fonts/fonts';
import Navbar from '@/components/navbar/Navbar';

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
        <div className=" mx-auto  max-w-[375px] h-[667px] sm:max-w-[768px] sm:h-[1024px] lg:max-w-[1440px] lg:h-[900px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
