import { Grid } from '@/components/containers/Grid/Grid';

import { EmployeesNav } from '@/components/EmployeesNav/EmployeesNav';

export default function Employees() {
  return (
    <Grid height={'100%'} tag={'section'}>
      <EmployeesNav />
    </Grid>
  );
}
