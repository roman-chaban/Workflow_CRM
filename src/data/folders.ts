import { FOLDERS_PATHS } from "@/enums/folders";

interface FolderData {
  id: number;
  icon: string;
  title: string;
  pagesTitle: string;
  path: string;
}

export type FoldersData = FolderData[];

export const foldersData: FoldersData = [
  {
    id: 1,
    icon: "/images/info-portal/icons/primary.svg",
    title: "Medical App",
    pagesTitle: "pages",
    path: FOLDERS_PATHS.MEDICAL_APP,
  },
  {
    id: 2,
    icon: "/images/info-portal/icons/secondary.svg",
    title: "Fortune website",
    pagesTitle: "pages",
    path: FOLDERS_PATHS.FORTUNE_WEBSITE,
  },
  {
    id: 3,
    icon: "/images/info-portal/icons/tertiary.svg",
    title: "Planner App",
    pagesTitle: "pages",
    path: FOLDERS_PATHS.PLANNER_APP,
  },
  {
    id: 4,
    icon: "/images/info-portal/icons/four.svg",
    title: "Time tracker - personal…",
    pagesTitle: "pages",
    path: FOLDERS_PATHS.TIME_TRACKER,
  },
];
