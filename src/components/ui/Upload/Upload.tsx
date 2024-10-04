import Image from 'next/image';
import React, { memo, FC } from 'react';

interface UploadProps {
  imageStyles: {
    width: number;
    height: number;
  };
  classNames?: {
    icon?: string;
    title?: string;
    upload?: string;
  };
  icon: string;
  title: string;
}

export const Upload: FC<UploadProps> = memo(
  ({
    icon,
    title,
    imageStyles,
    classNames = {
      icon: '',
      title: '',
    },
  }) => {
    return (
      <div className={classNames.upload}>
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

Upload.displayName = 'Upload';
