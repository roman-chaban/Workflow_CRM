
import styles from '@/styles/pages/NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles['not__found']}>
      <div className={styles['not__found-container']}>
        <h1 className={styles['not__found-title']}>
          This page is not found | 404
        </h1>
      </div>
    </div>
  );
}
