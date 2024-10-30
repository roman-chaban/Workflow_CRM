"use client";

import type { FC } from "react";

import { Upload, Attached, Button, Profile } from "@/components/index";

import Image from "next/image";

import styles from "./ActivityStream.module.scss";

export const ActivityStream: FC = () => {
  return (
    <div className={styles["activity"]}>
      <div className={styles["activity__container"]}>
        <h3 className={styles["activity__header-title"]}>Activity Stream</h3>
        <div className={styles["activity__main"]}>
          <Profile
            classNames={{
              profile: styles["activity__profile"],
              info: styles["activity__info"],
              icon: styles["activity__profile-image"],
              title: styles["activity__profile-title"],
              role: styles["activity__profile-role"],
            }}
            title={"Oscar Holloway"}
            role={"UI/UX Designer"}
            icon="/images/activity/profile.svg"
          />
        </div>
        <div className={styles["activity__updated"]}>
          <Upload
            icon="/images/activity/upload.svg"
            imageStyles={{ width: 50, height: 50 }}
            title="Updated the status of Mind Map task to In Progress"
            classNames={{
              icon: styles["activity__upload-icon"],
              title: styles["activity__upload-title"],
              upload: styles["activity__upload"],
            }}
          />
          <Attached
            icon="/images/activity/attach.svg"
            imageStyles={{ width: 50, height: 50 }}
            title="Attached files to the task"
            classNames={{
              icon: styles["activity__attached-icon"],
              title: styles["activity__attached-title"],
              attached: styles["activity__attached"],
            }}
          />
          <Profile
            classNames={{
              profile: styles["activity__profile-copy"],
              info: styles["activity__info"],
              icon: styles["activity__profile-image"],
              title: styles["activity__profile-title"],
              role: styles["activity__profile-role"],
            }}
            title={"Emily Tyler"}
            role={"Copywriter"}
            icon="/images/activity/profile-second.svg"
          />
          <Upload
            icon="/images/activity/upload.svg"
            imageStyles={{ width: 50, height: 50 }}
            title="Updated the status of Mind Map task to In Progress"
            classNames={{
              icon: styles["activity__upload-icon"],
              title: styles["activity__upload-title"],
              upload: styles["activity__upload"],
            }}
          />

          <Button type="button" className={styles["activity__view-button"]}>
            View more
            <Image
              src="/images/activity/down.svg"
              alt="Down Icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
