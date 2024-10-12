import type { FC } from 'react';
import Image from 'next/image';
import { ProjectItem as CurrentProjectItem } from '@/types/project-item';
import styles from './ProjectItem.module.scss';
import { TasksList } from '@/components/TasksList/TasksList';

interface ProjectItemProps {
  item: CurrentProjectItem;
}

export const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <div className={styles['project__item']}>
      <div className={styles['project__item-left']}>
        <div className={styles['project__item-info']}>
          <Image
            src={item.iconUrl}
            alt={item.title}
            width={50}
            height={50}
            className={styles['item__icon']}
          />
          <div className={styles['project__item-titles']}>
            <span className={styles['project__item-code']}>
              {item.projectCode}
            </span>
            <h4 className={styles['project__item-title']}>{item.title}</h4>
          </div>
        </div>
        <div className={styles['project__item-data']}>
          <data className={styles['project__item-dataBlock']}>
            {' '}
            <Image
              src={item.dateIconUrl}
              alt={item.creationDate}
              width={24}
              height={24}
            />{' '}
            {item.creationDate}
          </data>
          <h5
            className={styles['project__item-position']}
            style={{
              color: item.positionRating === 'Low' ? '#0ac947' : '#ffbd21',
            }}
          >
            <Image src={item.arrowIconUrl} alt={''} width={24} height={24} />
            {item.positionRating}
          </h5>
        </div>
      </div>
      <div className={styles['project__item-right']}>
        <h4 className={styles['project__data-title']}>Project Data</h4>
        <TasksList item={item} />
      </div>
    </div>
  );
};
