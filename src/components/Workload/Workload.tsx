'use client';

import type { FC } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { TEmployees } from '@/types/employees';
import { Employees } from '../Employees/Employees';

import styles from './Workload.module.scss';
import { ViewLink } from '../ui/ViewLink/ViewLink';

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
          <ViewLink>Workload</ViewLink>
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
