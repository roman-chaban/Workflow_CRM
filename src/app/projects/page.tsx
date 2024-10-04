import type { Metadata } from 'next';
import { Grid } from '@/components/containers/Grid/Grid';
import { ProjectsNav } from '@/components/pagesComponents/projects/ProjectsNav/ProjectsNav';

export const metadata: Metadata = {
  title: 'Workflow CRM | Projects',
  icons: '/favicon/crm_logo.svg',
};

export default function Projects() {
  return (
    <Grid isSection>
      <ProjectsNav />
    </Grid>
  );
}
