'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './not-found.css';

export function NotFoundCustomPage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          router.push('/catalog');
          return 0;
        }
      });
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [router]);

  return (
    <div className={ 'container' }>
      <h1 className={ 'title' }>404 - Página não encontrada</h1>
      <p className={ 'redirect-info' }>
        Você será redirecionado para a página de catálogo em { seconds } segundos...
      </p>
    </div>
  );
};

