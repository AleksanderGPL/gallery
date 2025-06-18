import { z } from 'zod';

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(256, 'Name must be at most 256 characters long'),
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters long')
    .max(32, 'Username must be at most 32 characters long')
    .regex(/^[a-zA-Z0-9]+$/, 'Username must only contain letters and numbers'),
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(256, 'Password must be at most 256 characters long')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(256, 'Password must be at most 256 characters long')
});

export const requestPasswordResetSchema = z.object({
  email: z.string().email('Invalid email')
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(256, 'Password must be at most 256 characters long'),
  token: z.string()
});

export const changePasswordSchema = z.object({
  oldPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(256, 'Password must be at most 256 characters long'),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(256, 'Password must be at most 256 characters long')
});
