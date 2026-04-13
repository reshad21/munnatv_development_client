import { z } from "zod";

export const createBlogFormSchemaValidation = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters long" })
    .max(10000, { message: "Content must not exceed 10,000 characters" }),

  category: z.string().min(1, { message: "Please select a category" }),

  thumbnail: z
    .string()
    .url({ message: "Please upload a valid thumbnail image" })
    .optional()
    .or(z.literal("")),

  tags: z
    .array(z.string())
    .min(1, { message: "Please add at least one tag" })
    .max(5, { message: "Maximum 5 tags allowed" })
    .optional(),

  excerpt: z
    .string()
    .min(20, { message: "Excerpt must be at least 20 characters" })
    .max(200, { message: "Excerpt must not exceed 200 characters" })
    .optional(),

  status: z
    .enum(["draft", "published"], {
      required_error: "Please select a status",
    })
    .default("draft"),
});

export type CreateBlogFormData = z.infer<typeof createBlogFormSchemaValidation>;
