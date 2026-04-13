import z from "zod";

export const contactFormSchemaValidation = z.object({
  name: z.string().min(2, {
    message: "Name is required!",
  }),
  email: z.string().email({
    message: "Invalid email address!",
  }),
  subject: z.string().min(2, {
    message: "Subject is required!",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long!",
  }),
});
