import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Loader from '@/components/Loader';

import useUser from '@/hooks/useUser';
import useWindowDimensions from '@/hooks/useWindowDimensions';

function DefaultLayout({ children }: { children: ReactNode }) {
  const user = useUser();
  const { width } = useWindowDimensions();

  if (!user || !user.data) return <Loader />;

  return (
    <main>
      <div className="xv-profile">
        {width && width < 1025 ? (
          <MobileNavbar user={user.data} />
        ) : (
          <Navbar user={user.data} />
        )}
        {children}
      </div>
    </main>
  );
}

export default DefaultLayout;
