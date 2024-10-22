/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string) => {
  const defaultTitle = useRef<string>(document.title);

  useEffect(() => {
    if (title && document.title !== title) {
      document.title = title;
    }

    return () => {
      document.title = defaultTitle.current;
    };
  }, [title]);
};
