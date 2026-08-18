import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "./leads.schemas";

export const saveLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      nome: data.nome || "Não informado",
      whatsapp: data.whatsapp,
      interesse: data.interesse || null,
      consentimento: data.consentimento,
    });

    if (error) {
      console.error("Failed to save lead:", error);
      throw new Error("Não foi possível salvar seu cadastro. Tente novamente.");
    }

    return { success: true };
  });
