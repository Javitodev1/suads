import { z } from 'zod'

export const Form = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  country: z.string(),
  city: z.string(),
  business: z.string(),
  website: z.string(),
  service: z.string(),
  budget: z.string(),
  brief: z.string(),
})
