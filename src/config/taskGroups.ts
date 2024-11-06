export type Task = {
  id: string;
  name: string;
  label: string;
};

export const taskGroups: Task[] = [
  { id: 'design', name: 'design', label: 'Design' },
  { id: 'development', name: 'development', label: 'Development' },
  { id: 'testing', name: 'testing', label: 'Testing' },
  { id: 'marketing', name: 'marketing', label: 'Marketing' },
  { id: 'management', name: 'management', label: 'Management' },
];
