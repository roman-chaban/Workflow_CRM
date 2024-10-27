"use client";

import { useState, type FC } from "react";
import Image from "next/image";

import { Input, Button } from "@/components/index/index";

import styles from "./Header.module.scss";
import Link from "next/link";
import { PATHS } from "@/constants/paths";

export const Header: FC = () => {
  const [search, setSearch] = useState<string>("");

  const searchIcon = (
    <Image
      priority
      src="/icons/headerIcons/search.svg"
      alt="Search Icon"
      width={20}
      height={20}
    />
  );

  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Input
          inputIcon={searchIcon}
          classNames={{
            input: styles["header__search-input"],
            label: styles["header__search-label"],
            labelText: "",
          }}
          properties={{
            htmlFor: "search",
            id: "search",
            name: "search",
            onChange: (event) => setSearch(event.target.value),
            type: "search",
            value: search,
            placeholder: "Search",
          }}
        />
        <div className={styles["header__account"]}>
          <Button
            type="button"
            className={styles["header__notification-button"]}
          >
            <Image
              priority
              src="/icons/headerIcons/notifications.svg"
              alt="Notification Icon"
              width={24}
              height={24}
            />
          </Button>
          <Button type={"button"} className={styles["signInButton"]}>
            <Link href={PATHS.SIGN_IN}>
              <Image
                priority
                src="/icons/headerIcons/addmember.svg"
                alt="Notification Icon"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
