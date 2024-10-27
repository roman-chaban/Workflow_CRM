export interface Customer {
  customerId: number;
  customerName: string;
  icon: string;
  email: string;
  gender: string;
  birthday: string;
  fullAge: string;
  position: string;
}

export type Customers = Customer[];
