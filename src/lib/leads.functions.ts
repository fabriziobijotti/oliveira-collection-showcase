import { createServerFn } from "@tanstack/react-start";

export const saveLead = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    const { z } = await import("zod");
    const leadSchema = z.object({
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
    return leadSchema.parse(data);
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      nome: data.nome,
      whatsapp: data.whatsapp,
      email: data.email || null,
      interesse: data.interesse || null,
      consentimento: data.consentimento,
    });

    if (error) {
      console.error("Failed to save lead:", error);
      throw new Error("Não foi possível salvar seu cadastro. Tente novamente.");
    }

    return { success: true };
  });
