import styles from "@/components/ui/Pagination/Pagination.module.scss";

export interface PaginationClassNamesProps {
  container: string;
  controls: string;
  navButtons: string;
  navButton: string;
  rangeDisplay: string;
}

export const classNames: PaginationClassNamesProps = {
  container: styles["paginationContainer"],
  controls: styles["paginationControls"],
  navButtons: styles["paginationButtonsBlock"],
  navButton: styles["paginationNavButton"],
  rangeDisplay: styles["paginationRangeDisplay"],
};
