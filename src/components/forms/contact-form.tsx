"use client";

import { useState } from "react";

type ContactState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export function ContactForm() {
  const [state, setState] = useState<ContactState>({ status: "idle" });

  async function onSubmit(formData: FormData) {
    setState({ status: "loading" });

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(errorData?.error ?? "No pudimos enviar tu mensaje.");
      }

      setState({
        status: "success",
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error ? error.message : "Ocurrió un error inesperado.",
      });
    }
  }

  return (
    <form action={onSubmit} className="grid gap-3" noValidate>
      <input
        name="name"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Tu nombre"
        required
      />
      <input
        name="email"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="subject"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Asunto"
        required
      />
      <textarea
        name="message"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        rows={5}
        placeholder="Mensaje"
        required
      />
      <button
        type="submit"
        className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {state.message ? (
        <p
          className={`text-sm ${
            state.status === "error" ? "text-red-500" : "text-emerald-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
