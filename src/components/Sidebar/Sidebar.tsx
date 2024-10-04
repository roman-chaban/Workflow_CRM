'use client';

import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

import { Nav, Button } from '@/components/index/index';
import { nav } from '@/types/nav';

interface SidebarProps {
  onOpenModal: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__container']}>
        <div className={styles['sidebar__nav']}>
          <div className={styles['sidebar__logo']}>
            <Image
              priority
              src="/icons/logo/Logo.svg"
              alt="Sidebar Logo"
              width={50}
              height={50}
            />
          </div>
          <Nav nav={nav} />
        </div>
        <div className={styles['sidebar__support']}>
          <div className={styles['sidebar__support-block']}>
            <Image
              priority
              src="/images/support/Support.svg"
              alt="Support Image"
              width={148}
              height={214}
              className={styles['sidebar__image-support']}
            />
            <Button
              type="button"
              className={styles['sidebar__support-button']}
              onClick={onOpenModal}
            >
              <Image
                src="/icons/dashboardIcons/white-chat.svg"
                alt="Chat Icon"
                width={20}
                height={20}
              />
              Support
            </Button>
          </div>
          <Button type="button" className={styles['sidebar__logout']}>
            <Image
              src="/icons/dashboardIcons/logout.svg"
              alt="Logout Icon"
              width={24}
              height={24}
            />
            <Link href={''}>Logout</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};
