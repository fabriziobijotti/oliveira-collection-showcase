CREATE TABLE public.leads (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    nome text NOT NULL,
    whatsapp text NOT NULL,
    email text,
    interesse text,
    consentimento boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon;
GRANT SELECT, INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous lead submissions"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users cannot view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (false);