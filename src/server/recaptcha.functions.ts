import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({ token: z.string().min(10).max(4000) });

export const verifyRecaptcha = createServerFn({ method: "POST" })
  .inputValidator((input) => schema.parse(input))
  .handler(async ({ data }) => {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) throw new Error("RECAPTCHA_SECRET_KEY no configurado");

    const params = new URLSearchParams({ secret, response: data.token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const json = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!json.success) {
      return { ok: false as const, error: json["error-codes"]?.join(", ") ?? "captcha_failed" };
    }
    return { ok: true as const };
  });