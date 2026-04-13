import HeroSection from '@/components/shared/common/HeroSection';
import React from 'react';
import ProjectDetailsSection from './_components/ProjectDetailsSection';
import { getProjectById } from '@/services/projects';

const ProjectDetailspage = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = params.id
    const project = await getProjectById(id);
    return (
        <>
            <HeroSection title={"Project Details"} />
            <ProjectDetailsSection project={project.data} />
        </>
    );
};

export default ProjectDetailspage;