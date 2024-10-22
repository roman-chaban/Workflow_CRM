'use client';

import {
    ProjectsNav
} from '@/components/pagesComponents/projects/ProjectsNav/ProjectsNav';
import {useState} from 'react';
import {
    Grid,
    ProjectsSidebar,
    Box,
    TasksNav,
    FiltersBoard,
} from '@/components/index/index';
import styles from '@/styles/pages/Projects.module.scss';
import {useAppSelector} from '@/hooks/useAppSelector';
import {
    renderContent,
    TasksItem,
} from '@/fixtures/renderContent/renderContent';
import {useDocumentTitle} from '@/hooks/useDocumentTitle';

export const ClientProjectsWrapper = () => {
    useDocumentTitle('Workflow CRM | Projects');
    const activeItemId = useAppSelector((state) => state.navSlice.activeItemId);
    const isOpenBoard = useAppSelector((state) => state.filterSlice.isOpen);
    const [activeTaskItemId, setActiveTaskItemId] =
        useState<TasksItem>('primary');

    return (
        <Grid isSection gap="1.75rem" tag={'section'} position="relative">
            <ProjectsNav/>
            <Box className={styles['box']}>
                <ProjectsSidebar/>
                <Box className={styles['tasks__box']}>
                    <TasksNav
                        activeItem={activeTaskItemId}
                        onMenuClick={setActiveTaskItemId}
                    />
                    {renderContent(activeItemId, activeTaskItemId)}
                </Box>
            </Box>
            {isOpenBoard && <FiltersBoard isClosedBoard={!isOpenBoard}/>}
        </Grid>
    );
};
