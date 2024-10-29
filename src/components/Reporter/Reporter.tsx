import type { FC } from "react";

import Image from "next/image";

import { ArrowIcon, Button, Input } from "../index";

import { ReporterItem, reporterItems } from "@/data/reporterItems";

import styles from "./Reporter.module.scss";

export const Reporter: FC = () => {
  return (
    <div className={styles["reporter"]}>
      <div className={styles["reporter__container"]}>
        <h5 className={styles["reporter__title"]}>Reporter</h5>
        <div className={styles["reporter__checkboxes"]}>
          {reporterItems.map((item: ReporterItem, index: number) => (
            <div key={item.id} className={styles["reporter__profileBlock"]}>
              <Input
                key={item.id}
                properties={{
                  type: "checkbox",
                  htmlFor: `${item.id}-${index}`,
                  id: `${item.id}-${index}`,
                  name: item.id,
                  value: "",
                  label: item.name,
                  onChange: () => {},
                }}
                classNames={{
                  input: styles["checkboxInput"],
                  label: styles["checkboxLabel"],
                  labelText: styles["checkboxLabel"],
                }}
              />
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className={styles["reporter__icon"]}
              />
            </div>
          ))}
          <Button type="button" className={styles["reporter__view-button"]}>
            View more <ArrowIcon className={styles["reporter__arrow-icon"]} />
          </Button>
        </div>
      </div>
    </div>
  );
};
