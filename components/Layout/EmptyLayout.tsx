import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loader from '@/components/Loader';

import useUser from '@/hooks/useUser';

function EmptyLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const user = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user?.data) {
      setLoading(true);
    } else if (user.data.name) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [user]);

  if (!user || user?.isLoading || loading) return <Loader />;

  return (
    <main>
      <div className="xv-profile">{children}</div>
    </main>
  );
}

export default EmptyLayout;
