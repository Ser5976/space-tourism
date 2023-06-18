import './globals.css';
import Head from 'next/head';
import { barlow } from './fonts';

export const metadata = {
  title: 'Space-Tourism',
  description: 'space travel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={barlow.className}>
        <div className=" relative w-[375px] h-[667px] m-auto sm:w-[768px] sm:h-[1024px] md:w-[1440px] md:h-[900px]">
          {children}
        </div>
      </body>
    </html>
  );
}
