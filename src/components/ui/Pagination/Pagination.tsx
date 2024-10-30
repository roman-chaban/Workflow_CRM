import type { FC } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Next } from "@/components/ui/buttons/PaginationButtons/Next/Next";
import { Prev } from "@/components/ui/buttons/PaginationButtons/Prev/Prev";
import { classNames } from "@/constants/paginationClassNames";

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && onPageChange(currentPage + 1);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalPages);

  return (
    <div className={classNames.container}>
      <div className={classNames.controls}>
        <div className={classNames.rangeDisplay}>
          {startItem}-{endItem} of {totalItems}
        </div>
        <div className={classNames.navButtons}>
          <Button
            type={"button"}
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={classNames.navButton}
          >
            <Prev isActiveColor={currentPage > 1} />
          </Button>
          <Button
            type={"button"}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={classNames.navButton}
          >
            <Next isActiveColor={currentPage < totalPages} />
          </Button>
        </div>
      </div>
    </div>
  );
};
