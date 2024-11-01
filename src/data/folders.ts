interface FolderData {
  id: number;
  icon: string;
  title: string;
  pagesTitle: string;
}

export type FoldersData = FolderData[];

export const foldersData: FoldersData = [
  {
    id: 1,
    icon: "/images/info-portal/icons/primary.svg",
    title: "Medical App",
    pagesTitle: "pages",
  },
  {
    id: 2,
    icon: "/images/info-portal/icons/secondary.svg",
    title: "Fortune website",
    pagesTitle: "pages",
  },
  {
    id: 3,
    icon: "/images/info-portal/icons/tertiary.svg",
    title: "Planner App",
    pagesTitle: "pages",
  },
  {
    id: 4,
    icon: "/images/info-portal/icons/four.svg",
    title: "Time tracker - personal…",
    pagesTitle: "pages",
  },
];
