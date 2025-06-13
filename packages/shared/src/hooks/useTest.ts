import { useEffect } from 'react';

const useTest = (prop?: string) => {
  useEffect(() => {
    console.log('use Test prop ==> ', prop);
  }, [prop]);
};

export { useTest };
