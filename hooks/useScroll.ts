import { useEffect } from 'react';

function useScroll(element: HTMLElement | null, callback?: any) {
  useEffect(() => {
    if (element) {
      element.addEventListener('scroll', callback);
      return () => element.removeEventListener('scroll', callback);
    }
  }, [element]);
}

export default useScroll;
