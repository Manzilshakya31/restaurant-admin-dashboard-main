import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email' })
    .refine((value) => emailRegex.test(value), {
      message: 'Invalid email format.',
    }),
  password: z.string({ required_error: 'Password is required' }),
});

export const loginResolver = zodResolver(loginSchema);
