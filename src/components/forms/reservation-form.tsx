"use client";

import { useState } from "react";

type ReservationState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export function ReservationForm() {
  const [state, setState] = useState<ReservationState>({ status: "idle" });

  async function onSubmit(formData: FormData) {
    setState({ status: "loading" });

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      guests: formData.get("guests"),
      reservedFor: formData.get("reservedFor"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/reservations", {
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
        throw new Error(errorData?.error ?? "No pudimos registrar tu reserva.");
      }

      setState({
        status: "success",
        message: "Reserva enviada. Confirmaremos disponibilidad por correo.",
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
    <form action={onSubmit} className="grid gap-3 md:grid-cols-2" noValidate>
      <input
        name="name"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Nombre completo"
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
        name="phone"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Teléfono"
      />
      <input
        name="guests"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        placeholder="Cantidad de personas"
        type="number"
        min={1}
        max={20}
        required
      />
      <input
        name="reservedFor"
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        type="datetime-local"
        required
      />
      <textarea
        name="notes"
        className="md:col-span-2 rounded-md border border-border bg-background px-3 py-2 text-sm"
        rows={4}
        placeholder="Notas"
      />
      <button
        type="submit"
        className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Enviando..." : "Enviar reserva"}
      </button>

      {state.message ? (
        <p
          className={`md:col-span-2 text-sm ${
            state.status === "error" ? "text-red-500" : "text-emerald-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
