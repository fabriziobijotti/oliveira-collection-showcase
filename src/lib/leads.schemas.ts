import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().trim().min(2, { message: "Informe seu nome." }).max(100),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: "Informe um WhatsApp válido com DDD." }),
  email: z.string().trim().email({ message: "E-mail inválido." }).optional().or(z.literal("")),
  interesse: z.string().max(60).optional(),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário autorizar o contato." }),
  }),
});

export type Lead = z.infer<typeof leadSchema>;
