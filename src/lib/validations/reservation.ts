import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().min(7).max(30).optional(),
  guests: z.coerce.number().int().min(1).max(20),
  reservedFor: z
    .string()
    .min(1)
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Fecha de reserva inválida",
    }),
  notes: z.string().max(600).optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
