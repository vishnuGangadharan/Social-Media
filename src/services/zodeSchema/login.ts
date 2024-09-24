import { z } from 'zod'


export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password : z.string().min(6, "Password must contain 6 characters")
    .refine((values) => /[a-zA-Z]/.test(values), {
        message: "Password must contain letters.",
      })
      .refine((s) => /\d/.test(s), {
        message: "Password must contain numbers.",
      })
      .refine((s) => /[!@#$%^&*(),.?":{}|<>]/.test(s), {
        message: "Password must contain special characters.",
      }),
})


export const signUpSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long")
    .refine(s => /^[a-zA-Z0-9_-]+$/.test(s), {
      message: "Only letters,No characters allowed",
    }),
    email: z.string().email('Invalid email address'),
    phone: z.string()
    .refine(value => /^\d{10}$/.test(value), {
      message: "Phone number must be exactly 10 digits long",
    }),
  password: z.string()
    .min(7, "Password should be at least 7 characters")
    .refine(s => /[a-zA-Z]/.test(s), {
      message: "Password must contain letters.",
    })
    .refine(s => /\d/.test(s), {
      message: "Password must contain numbers.",
    })
    .refine(s => /[!@#$%^&*(),.?":{}|<>]/.test(s), {
      message: "Password must contain special characters.",
    }),
    confirmPassword: z.string()
    .min(7, "Confirm Password should be at least 7 characters"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})