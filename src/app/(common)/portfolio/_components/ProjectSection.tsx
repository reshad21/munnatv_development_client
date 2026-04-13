import React from 'react';
import Project from './Project';
import ProjectSidebar from './ProjectSidebar';
import PaginationWrapper from '@/components/ui/PaginationWrapper';
import { TProject } from '@/types/project.types';

type ProjectSectionProps = {
    portfolioItems: { data: TProject[]; meta: { totalPages: number } };
    page: number;
};

const ProjectSection = ({ portfolioItems, page }: ProjectSectionProps) => {

    return (
        <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8'>
            <div className="">
                <Project portfolioItems={portfolioItems.data} />
                {portfolioItems?.meta?.totalPages > 1 && (
                    <PaginationWrapper
                        active={page}
                        totalPages={portfolioItems?.meta?.totalPages || 1}
                    />
                )}
            </div>
            <ProjectSidebar />
        </div>
    );
};

export default ProjectSection;