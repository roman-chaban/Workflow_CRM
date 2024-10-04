import { FC, memo } from 'react';
import Image from 'next/image';

interface AttachedProps {
  imageStyles: {
    width: number;
    height: number;
  };
  classNames?: {
    attached?: string;
    icon?: string;
    title?: string;
  };

  icon: string;
  title: string;
}

export const Attached: FC<AttachedProps> = memo(
  ({
    classNames = { attached: '', icon: '', title: '' },
    icon,
    title,
    imageStyles,
  }) => {
    return (
      <div className={classNames.attached}>
        <Image
          src={icon}
          alt={`Icon representing ${title}`}
          width={imageStyles.width}
          height={imageStyles.height}
          className={classNames?.icon}
          onError={(e) => (e.currentTarget.src = '')}
        />
        <h5 className={classNames?.title}>{title}</h5>
      </div>
    );
  }
);

Attached.displayName = 'Attached';
