import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/Button/Button';
import { Plus } from '@/components/ui/icons/Plus/Plus';

import { PATHS } from '@/enums/paths';

import styles from './TimeTrackerNav.module.scss';

export const TimeTrackerNav: FC = () => {
  return (
    <nav className={styles.timeTrackerNav}>
      <div className={styles.subBlock}>
        <Link href={PATHS.INFO_PORTAL} className={styles.link}>
          <Image
            src={'/icons/nearest/arrow-back.svg'}
            alt={'Arrow Back Icon'}
            width={24}
            height={24}
          />{' '}
          Back to Info Portal
        </Link>
        <h1 className={styles.title}>Time tracker - personal account</h1>
      </div>
      <Button type={'button'} className={styles.addButton}>
        <Plus color={'white'} />
        Add Folder
      </Button>
    </nav>
  );
};
