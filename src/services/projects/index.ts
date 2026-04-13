"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TQuery } from "@/types/query.type";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createProject = async (data: FieldValues) => {
  const response = await apiRequest("projects", {
    method: "POST",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 201) {
    revalidatePath("/dashboard/projects");
  }

  return response;
};

export const getAllProjects = async (query: TQuery[]) => {
  const params = new URLSearchParams();

  if (query && query.length > 0) {
    query.forEach((item) => {
      params.append(item.key, item.value);
    });
  }

  const response = await apiRequest(`projects?${params.toString()}`, {
    authRequired: true,
  });

  return response;
};

export const getProjectById = async (id: string) => {
  const response = await apiRequest(`projects/${id}`, {
    authRequired: true,
  });

  return response;
};

export const updateProject = async (id: string, data: FieldValues) => {
  const response = await apiRequest(`projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath(`/dashboard/projects/${id}`);
  }

  return response;
};

export const deleteProject = async (id: string) => {
  const response = await apiRequest(`projects/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath("/dashboard/projects");
  }

  return response;
};
