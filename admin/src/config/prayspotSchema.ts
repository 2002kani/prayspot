import * as z from "zod";

export const prayspotSchema = z.object({
  name: z.string().min(3, "Name muss mindestens 3 Zeichen lang sein"),
  description: z.string().optional(),
  type: z.enum(["MOSQUE", "PRAYER_ROOM"], {
    message: "Bitte wähle eine Kategorie",
  }),
  address: z.object({
    street: z.string().min(1, "Straße ist erforderlich"),
    houseNumber: z.string().optional(),
    postalCode: z.string().regex(/^\d{5}$/, "PLZ muss 5 Ziffern haben"),
    city: z.string().min(1, "Stadt ist erforderlich"),
  }),
  latitude: z.number().min(-90).max(90, "Ungültiger Breitengrad"),
  longitude: z.number().min(-180).max(180, "Ungültiger Längengrad"),
});
