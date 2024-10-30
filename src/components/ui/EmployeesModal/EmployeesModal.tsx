import { ChangeEvent, useRef, useState, type FC } from 'react';

import styles from './EmployeesModal.module.scss';
import { Button } from '../Button/Button';
import { Close } from '@/components/ui/icons/Close/Close';
import Image from 'next/image';
import { Input } from '../Input/Input';
import { Plus } from '@/components/ui/icons/Plus/Plus';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

interface EmployeesModalProps {
  isOpened: boolean;
  onClosed: () => void;
}

export const EmployeesModal: FC<EmployeesModalProps> = ({
  isOpened,
  onClosed,
}) => {
  const [member, setMember] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => onClosed());

  const handleCloseModal = () => {
    onClosed();
  };

  const handleChangeMember = (event: ChangeEvent<HTMLInputElement>) => {
    setMember(event.target.value);
  };

  return (
    isOpened && (
      <div className={styles['modal']}>
        <div ref={modalRef} className={styles['modal__container']}>
          <div className={styles['modal__content']}>
            <div className={styles['modal__content-header']}>
              <h4 className={styles['modal__content-title']}>Add Employee</h4>
              <Button
                onClick={handleCloseModal}
                type="button"
                className={styles['modal__close-button']}
              >
                <Close />
              </Button>
            </div>
            <div className={styles['modal__content-main']}>
              <Image
                src={'/images/employees/illustration.svg'}
                width={464}
                height={196}
                alt="Modal Illustration"
                className={styles['illustration']}
              />
              <Input
                classNames={{
                  input: styles['member__input'],
                  label: styles['member__label'],
                  labelText: styles['member__text'],
                }}
                properties={{
                  value: member,
                  onChange: handleChangeMember,
                  htmlFor: 'member',
                  id: 'member',
                  name: 'member',
                  type: 'email',
                  label: 'Member’s Email',
                  placeholder: 'memberemail@gmail.com',
                }}
              />
              <Button type="button" className={styles['member__button']}>
                <Plus color="#3f8cff" /> Add another Member
              </Button>
            </div>
            <div className={styles['modal__content-footer']}>
              <Button type="button" className={styles['approve__button']}>
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
