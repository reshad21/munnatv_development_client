import z from "zod";

export const teamFormSchemaValidation = z.object({
  name: z.string().min(2, {
    message: "Name is required!",
  }),
  position: z.string().min(2, {
    message: "Position is required!",
  }),
  photo: z.string().optional().or(z.literal("")),
});
