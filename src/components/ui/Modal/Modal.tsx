import { forwardRef, type ForwardedRef } from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { Textarea } from '../Textarea/Textarea';
import { Select } from '../Select/Select';

interface ModalProps {
  onClose: () => void;
}

const options = [
  { value: 'technical_support', label: 'Technical Support' },
  { value: 'billing_inquiry', label: 'Billing Inquiry' },
  { value: 'feature_request', label: 'Feature Request' },
  { value: 'general_question', label: 'General Question' },
];

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles['modal']}>
        <div ref={ref} className={styles['modal__container']}>
          <Button
            type="button"
            onClick={onClose}
            className={styles['modal__close']}
          >
            <Image
              src="/icons/dashboardIcons/modal-close.svg"
              alt="Close Icon"
              width={24}
              height={24}
              className={styles['modal__close-icon']}
            />
          </Button>
          <div className={styles['modal__content']}>
            <h4 className={styles['modal__title']}>Need some Help?</h4>
            <div className={styles['modal__header']}>
              <Image
                className={styles['modal__illustration']}
                src={'/images/modal/illustration.svg'}
                width={464}
                height={192}
                alt="Illustration"
              />
              <p className={styles['modal__header-subTitle']}>
                Describe your question and our specialists will answer you
                within 24 hours.
              </p>
            </div>
            <div className={styles['modal__main']}>
              <Select
                options={options}
                defaultValue="Technical difficulties"
                classNames={{
                  defaultOption: styles['default__option'],
                  label: styles['label'],
                  option: styles['option'],
                  optionsContainer: styles['options__container'],
                  select: styles['select'],
                  selectContainer: styles['select__container'],
                }}
                selectLabel="Request Subject"
              />
              <Textarea
                labelClassName={styles['modal__description']}
                className={styles['modal__textarea']}
                htmlFor="description"
                id="description"
                name="description"
                placeholder="Add some description of the request"
              >
                Description
              </Textarea>
            </div>
            <Button type="button" className={styles['modal__send']}>
              Send Request
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';
