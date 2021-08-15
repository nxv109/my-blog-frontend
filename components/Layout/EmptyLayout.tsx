import { ReactNode } from 'react';

function EmptyLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="xv-profile">{children}</div>
    </main>
  );
}

export default EmptyLayout;
