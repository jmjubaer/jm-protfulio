import { z } from "zod";

export const contactValidationSchema = z.object({
    firstName: z.string({ required_error: "First name is required" }),
    lastName: z.string({ required_error: "Last name is required" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .refine((val) => /^\+?[0-9]{10,15}$/.test(val), {
            message: "Must be a valid number ",
        }),
    email: z
        .string({ required_error: "Email is required" })
        .refine((val) => /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(val), {
            message: "Must be a valid email ",
        }),
    subject: z.string({ required_error: "Subject is required" }),
    message: z.string({ required_error: "Message is required" }),
});
