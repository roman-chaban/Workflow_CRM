export type GlobalTabs = { label: string; value: ActiveTabs }[];
export type TabType<T extends string = string> = T;
export type ActiveTabs<T extends string = string> = T;
