"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TQuery } from "@/types/query.type";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createTeams = async (data: FieldValues) => {
  const response = await apiRequest("teams", {
    method: "POST",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 201) {
    revalidatePath("/dashboard/teams");
  }

  return response;
};

export const getAllTeams = async (query: TQuery[]) => {
  const params = new URLSearchParams();

  if (query && query.length > 0) {
    query.forEach((item) => {
      params.append(item.key, item.value);
    });
  }

  const response = await apiRequest(`teams?${params.toString()}`, {
    authRequired: true,
  });

  if (response.statusCode === 200) {
    return response.data || [];
  }
  return [];
};

export const getTeamById = async (id: string) => {
  const response = await apiRequest(`teams/${id}`, {
    authRequired: true,
  });

  if (response.statusCode === 200) {
    return response.data;
  }
  return null;
};

export const updateTeam = async (id: string, data: FieldValues) => {
  const response = await apiRequest(`teams/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath(`/dashboard/teams/${id}`);
  }

  return response;
};

export const deleteTeam = async (id: string) => {
  const response = await apiRequest(`teams/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath("/dashboard/teams");
  }

  return response;
};
