"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TQuery } from "@/types/query.type";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createBlog = async (data: FieldValues) => {
  const response = await apiRequest("blogs", {
    method: "POST",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 201) {
    revalidatePath("/dashboard/blogs");
  }

  return response;
};

export const getAllBlogs = async (query: TQuery[]) => {
  const params = new URLSearchParams();

  if (query && query.length > 0) {
    query.forEach((item) => {
      params.append(item.key, item.value);
    });
  }

  const response = await apiRequest(`blogs?${params.toString()}`, {
    authRequired: true,
  });

  return response;
};

export const getBlogById = async (id: string) => {
  const response = await apiRequest(`blogs/${id}`, {
    authRequired: true,
  });

  return response;
};

export const updateBlog = async (id: string, data: FieldValues) => {
  const response = await apiRequest(`blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath(`/dashboard/blogs/${id}`);
  }

  return response;
};

export const deleteBlog = async (id: string) => {
  const response = await apiRequest(`blogs/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  if (response.statusCode === 200) {
    revalidatePath("/dashboard/blogs");
  }

  return response;
};
