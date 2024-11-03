import type { FC } from "react";

import { Heading } from "@/components/ui/Heading/Heading";

import Image from "next/image";

import styles from "./InfoPortalBanner.module.scss";

interface BannerImage {
  bannerImage: string;
  altText: string;
  width: number;
  height: number;
}

interface InfoPortalBannerProps {
  title: string;
  subtitle: string;
  bannerImageProps: BannerImage;
}

export const InfoPortalBanner: FC<InfoPortalBannerProps> = ({
  title,
  subtitle,
  bannerImageProps,
}) => {
  return (
    <div className={styles["infoPortalBanner"]}>
      <div className={styles["infoPortalBannerContainer"]}>
        <Heading level={"h4"} className={styles["infoPortalBannerHeading"]}>
          {title}
        </Heading>
        <p className={styles["infoPortalBannerSubtitle"]}>{subtitle}</p>
      </div>
      <Image
        src={bannerImageProps.bannerImage}
        alt={bannerImageProps.altText}
        width={bannerImageProps.width}
        height={bannerImageProps.height}
        className={styles["IllustrationImage"]}
        priority
      />
    </div>
  );
};
