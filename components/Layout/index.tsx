import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="xv-profile">
        <MobileNavbar />
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default DefaultLayout;
