import React from 'react';
import Project from './Project';
import ProjectSidebar from './ProjectSidebar';
import { getAllProjects } from '@/services/projects';
import { TQuery } from '@/types/query.type';
import PaginationWrapper from '@/components/ui/PaginationWrapper';

type ProjectSectionProps = {
    portfolioItems: any;
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