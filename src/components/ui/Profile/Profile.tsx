import { FC, memo } from 'react';

import Image from 'next/image';

interface ProfileProps {
  title: string;
  icon: string;
  role: string;
  classNames: {
    profile: string;
    icon: string;
    info: string;
    title: string;
    role: string;
  };
}

export const Profile: FC<ProfileProps> = memo(
  ({ title, icon, role, classNames }) => {
    return (
      <div className={classNames.profile}>
        <Image
          src={icon}
          alt="Profile Image"
          width={50}
          height={50}
          className={classNames.icon}
        />
        <div className={classNames.info}>
          <h4 className={classNames.title}>{title}</h4>
          <span className={classNames.role}>{role}</span>
        </div>
      </div>
    );
  }
);

Profile.displayName = 'Profile';
