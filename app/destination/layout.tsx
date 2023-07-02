import CommonTitle from '@/components/common_title/CommonTitle';
import Navigation from '@/components/destination/navigation/Navigation';
import '../globals.css';

export const metadata = {
  title: 'Space tourism/Destination ',
};

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommonTitle number="01" />
      <Navigation />
      {children}
    </>
  );
}
