export interface ProjectItem {
  id: number;
  iconUrl: string;
  projectCode: string;
  title: string;
  creationDate: string;
  dateIconUrl: string;
  arrowIconUrl: string;
  positionRating: string;
  totalTaskCount: number;
  activeTaskCount: number;
  icons: Array<string>;
  totalRating: number;
}

export type ProjectItems = Array<ProjectItem>;
