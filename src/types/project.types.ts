export type TProject = {
  id: string;
  name: string;
  description?: string | null;
  liveUrl?: string | null;
  demoUrl?: string | null;
  thumbnail?: string | null;
  startDate?: string | null;  // ISO date string
  endDate?: string | null;
  author: string;
  categoryId: string;
  category?: Category;
  projectFeatures: ProjectFeature[];
  projectTechStacks: ProjectTechStack[];
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
};

export type ProjectFeature = {
  id: string;
  name: string;
  projectId: string;
  project?: TProject;
  createdAt: string;
  updatedAt: string;
};

export type ProjectTechStack = {
  id: string;
  name: string;
  icon?: string | null;
  slogan: string;
  projectId: string;
  project?: TProject;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  // other fields if you have
};
