import CommonTitle from '@/components/common_title/CommonTitle';
import styles from './Destination.module.css';

export const metadata = {
  title: 'Space tourism/Destination ',
};

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <CommonTitle number="01" />

      {children}
    </main>
  );
}
