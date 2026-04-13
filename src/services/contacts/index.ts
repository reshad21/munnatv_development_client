"use server";

import { apiRequest } from "@/lib/apiRequest";
import { TQuery } from "@/types/query.type";
import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createContact = async (payload: FieldValues) => {
  const response = await apiRequest("contacts", {
    method: "POST",
    body: JSON.stringify(payload),
    authRequired: true,
  });

  revalidatePath("/dashboard/contacts");

  return response;
};

export const getContacts = async (queries: TQuery[]) => {
  const params = new URLSearchParams();

  if (queries && queries.length > 0) {
    queries.forEach((query) => {
      params.append(query.key, query.value);
    });
  }

  const response = await apiRequest(`contacts?${params.toString()}`, {
    method: "GET",
    authRequired: true,
  });

  if (response.statusCode === 200) {
    return response.data || [];
  }
  return [];
};

export const getContact = async (id: string) => {
  const response = await apiRequest(`contacts/${id}`, {
    method: "GET",
    authRequired: true,
  });

  if (response.statusCode === 200) {
    return response.data;
  }
};

export const deleteContact = async (id: string) => {
  const response = await apiRequest(`contacts/${id}`, {
    method: "DELETE",
    authRequired: true,
  });

  revalidatePath("/dashboard/contacts");

  return response;
};
