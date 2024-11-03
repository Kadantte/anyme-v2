import Footer from '@/components/Footer';
import MobileNavbar from '@/components/mobile-navbar';
import Navbar from '@/components/navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      {children}
      <Footer />
    </>
  );
}
