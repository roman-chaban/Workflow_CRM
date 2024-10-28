"use client";

import { FC, useState } from "react";

import { Button } from "@/components/ui/Button/Button";

interface SwitcherButtonProps {
  classNames: {
    switcherButton: string;
    switcherCircle: string;
    activeCircle: string;
  };
}

export const SwitcherButton: FC<SwitcherButtonProps> = ({ classNames }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <Button
      type={"button"}
      className={classNames.switcherButton}
      onClick={toggleButton}
      aria-pressed={isActive}
    >
      <span
        className={classNames.switcherCircle}
        id={isActive ? classNames.activeCircle : ""}
      ></span>
    </Button>
  );
};
