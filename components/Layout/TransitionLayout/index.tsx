import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';

import styles from './Layout.module.css';

interface IProps {
  children: React.ReactNode | any;
}

function TransitionLayout({ children }: IProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    // if (children?.type.name !== displayChildren.type.name) // This happen issue not load page in Nextjs
    if (children !== displayChildren) {
      setTransitionStage('fadeOut');
      setLoading(true);
    }
  }, [children, displayChildren]);

  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayChildren(children);
          setTransitionStage('fadeIn');
          setLoading(false);
        }
      }}
      className={`${styles.wrapper} ${styles[transitionStage]}`}
    >
      {loading ? <Loader /> : displayChildren}
    </div>
  );
}

export default TransitionLayout;
