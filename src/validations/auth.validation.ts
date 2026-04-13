import z from "zod";

export const loginFormSchemaValidation = z.object({
  email: z.string().email({
    message: "Invalid email address!",
  }),
  password: z.string().min(6,{
    message: "Password must be at Least 6 characters long!"
  })
});
export const resetFormSchemaValidation = z.object({
  email: z.string().email({
    message: "Invalid email address!",
  }),
});
