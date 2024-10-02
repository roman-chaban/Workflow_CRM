export interface Employee {
  id: number;
  image: string;
  fullName: string;
  role: string;
  position: string;
  employment: number;
}

export type TEmployees = Array<Employee>;
