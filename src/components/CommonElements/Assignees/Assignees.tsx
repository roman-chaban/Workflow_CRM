import { useState, type FC } from "react";

import { Input } from "../../index";

import styles from "./Assignees.module.scss";

import Image from "next/image";

export const Assignees: FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles["assignees"]}>
      <div className={styles["assignees__container"]}>
        <Input
          classNames={{
            input: styles["assignees__input"],
            label: styles["assignees__label"],
            labelText: styles["assignees__text"],
          }}
          properties={{
            htmlFor: "assignees",
            id: "assignees",
            name: "assignees",
            onChange: (event) => setSearch(event.target.value),
            type: "text",
            value: search,
            label: "Assignees",
            placeholder: "Search",
          }}
          inputIcon={
            <Image
              src={"/icons/reporter/search-icon.svg"}
              alt="Calendar Icon"
              width={24}
              height={24}
              className={styles["search__icon"]}
            />
          }
        />
      </div>
    </div>
  );
};
