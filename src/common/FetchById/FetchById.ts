import EmployeesData from "../../../public/data/employees.json";
import { TEmployees } from "@/types/employees";

export const fetchById = async (): Promise<TEmployees> => {
  try {
    return EmployeesData as TEmployees;
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return [] as TEmployees;
  }
};
