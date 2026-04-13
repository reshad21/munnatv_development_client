/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectSidebar from '../../_components/ProjectSidebar';
import ProjectDetails from './ProjectDetails';

const ProjectDetailsSection = ({ project }: { project: any }) => {
    return (
        <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8'>
            <ProjectDetails project={project} />
            <ProjectSidebar />
        </div>
    );
};

export default ProjectDetailsSection;