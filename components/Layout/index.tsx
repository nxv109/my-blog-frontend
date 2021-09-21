import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Loader from '@/components/Loader';

import useUser from '@/hooks/useUser';

function DefaultLayout({ children }: { children: ReactNode }) {
  const user = useUser();

  if (!user || !user.data) return <Loader />;

  return (
    <main>
      <div className="xv-profile">
        <MobileNavbar user={user.data} />
        <Navbar user={user.data} />
        {children}
      </div>
    </main>
  );
}

export default DefaultLayout;
