import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const signupSchema = z
  .object({
    firstName: z
      .string({ required_error: 'First name is required' })
      .min(1, { message: 'First name is required' }),
    lastName: z
      .string({ required_error: 'Last name is required' })
      .min(1, { message: 'Last name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    password: z.string({ required_error: 'Password is required' }),
    confirmPassword: z.string({ required_error: 'Confirm password is required' }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: 'Passwords does not match',
    path: ['confirmPassword'],
  });

export const signupResolver = zodResolver(signupSchema);
