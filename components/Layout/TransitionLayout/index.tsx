import { useState, useEffect } from 'react';
import styles from './Layout.module.css';

interface IProps {
  children: React.ReactNode | any;
}

function TransitionLayout({ children }: IProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    // if (children?.type.name !== displayChildren.type.name) // This happen issue not load page in Nextjs
    if (children !== displayChildren)
      setTransitionStage('fadeOut');
  }, [children, displayChildren]);

  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayChildren(children);
          setTransitionStage('fadeIn');
        }
      }}
      className={`${styles.wrapper} ${styles[transitionStage]}`}
    >
      {displayChildren}
    </div>
  );
}

export default TransitionLayout;
