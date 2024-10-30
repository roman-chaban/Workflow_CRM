import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";
import styles from "@/components/CommonElements/Workload/Workload.module.scss";

interface ViewLinkProps {
  children: string;
  href: string;
}

export const ViewLink: FC<ViewLinkProps> = ({ children, href = "/" }) => {
  return (
    <>
      <h3 className={styles["workload__header-title"]}>{children}</h3>
      <Link href={href} className={styles["workload__header-link"]}>
        View all{" "}
        <Image
          src="/icons/workload/arrow-right.svg"
          alt="Arrow Icon"
          width={24}
          height={24}
        />
      </Link>
    </>
  );
};
