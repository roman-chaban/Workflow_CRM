'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFetch } from '@/hooks/useFetch';
import { TEmployees } from '@/types/employees';
import { Employees } from '../Employees/Employees';

import styles from './Workload.module.scss';

export const Workload: FC = () => {
  const { data, loading, error } = useFetch<TEmployees>({
    url: '/data/employees.json',
  });

  if (loading) return <div>Employees Loading...</div>;
  if (error) return <div>Error loading employees.</div>;

  return (
    <div className={styles['workload']}>
      <div className={styles['workload__container']}>
        <div className={styles['workload__header']}>
          <h3 className={styles['workload__header-title']}>Workload</h3>
          <Link href={''} className={styles['workload__header-link']}>
            View all{' '}
            <Image
              src="/icons/workload/arrow-right.svg"
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>

        {data && Array.isArray(data) ? (
          <Employees employees={data} />
        ) : (
          'Employees Loading...'
        )}
      </div>
    </div>
  );
};
