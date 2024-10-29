"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";

import { Button } from "@/components/ui/Button/Button";

interface SwitcherButtonProps {
  classNames: {
    switcherButton: string;
    switcherCircle: string;
    activeCircle: string;
    switcherBackground: string;
  };
  setShowProperties: Dispatch<SetStateAction<boolean>>;
}

export const SwitcherButton: FC<SwitcherButtonProps> = ({
  classNames,
  setShowProperties,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive((prevState) => !prevState);
    setShowProperties(!isActive);
  };

  return (
    <Button
      type={"button"}
      className={`${classNames.switcherButton} ${isActive ? classNames.switcherBackground : ""}`}
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
