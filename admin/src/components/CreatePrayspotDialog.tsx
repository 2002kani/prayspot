import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2, MapPin, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { SpotType } from "@/types/SpotType";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { spotTypeOptions } from "@/constants/SpotTypeOptions";
import { prayspotSchema } from "@/config/prayspotSchema";
import { createPrayspot } from "@/api/prayspotApi";

import { usePrayspots } from "@/hooks/useSpots";

interface ICreatePrayspotDialogProps {
  open?: boolean;
  onClose: () => void;
}

type PrayspotFormData = z.infer<typeof prayspotSchema>;

function CreatePrayspotDialog({ open, onClose }: ICreatePrayspotDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate } = usePrayspots();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<PrayspotFormData>({
    resolver: zodResolver(prayspotSchema),
    defaultValues: {
      name: "",
      description: "",
      type: undefined,
      address: {
        street: "",
        houseNumber: "",
        postalCode: "",
        city: "",
      },
      latitude: undefined,
      longitude: undefined,
    },
  });

  const spotType = watch("type");

  const onSubmit = async (data: PrayspotFormData) => {
    try {
      setIsSubmitting(true);
      await createPrayspot(data);
      mutate();

      reset();
      onClose();
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent>
        <DialogHeader className="px-1 pt-6 pb-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                color: "hsl(var(--primary))",
                background:
                  "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))",
              }}
            >
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold">
                Gebetsort erstellen
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-0.5">
                Teile einen neuen Ort mit der Community
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-1 py-5 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name des Gebetsortes</Label>
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="z.B. Islamisches Zentrum Berlin"
                  className="h-11"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschreibung (optional)</Label>
                <Textarea
                  {...register("description")}
                  id="description"
                  placeholder="Beschreibe den Ort kurz..."
                  className="min-h-[80px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label>Art des Ortes</Label>
                <Select
                  value={spotType}
                  onValueChange={(val) => setValue("type", val as SpotType)}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Wähle eine Kategorie" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="bg-background">
                    {spotTypeOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-primary">{option.icon}</span>
                          {option.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-sm text-red-500">{errors.type.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="street">Straße</Label>
                  <Input
                    {...register("address.street")}
                    id="street"
                    placeholder="Musterstraße"
                    className="h-11"
                  />
                  {errors.address?.street && (
                    <p className="text-sm text-red-500">
                      {errors.address.street.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="houseNumber">Nr. (optional)</Label>
                  <Input
                    {...register("address.houseNumber")}
                    id="houseNumber"
                    placeholder="12a"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="postalCode">PLZ</Label>
                  <Input
                    {...register("address.postalCode")}
                    id="postalCode"
                    placeholder="10115"
                    className="h-11"
                  />
                  {errors.address?.postalCode && (
                    <p className="text-sm text-red-500">
                      {errors.address.postalCode.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="city">Stadt</Label>
                  <Input
                    {...register("address.city")}
                    id="city"
                    placeholder="Berlin"
                    className="h-11"
                  />
                  {errors.address?.city && (
                    <p className="text-sm text-red-500">
                      {errors.address.city.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="latitude">Breitengrad</Label>
                <Input
                  {...register("latitude", { valueAsNumber: true })}
                  id="latitude"
                  type="number"
                  step="any"
                  placeholder="52.520008"
                  className="h-11"
                />
                {errors.latitude && (
                  <p className="text-sm text-red-500">
                    {errors.latitude.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="longitude">Längengrad</Label>
                <Input
                  {...register("longitude", { valueAsNumber: true })}
                  id="longitude"
                  type="number"
                  step="any"
                  placeholder="13.404954"
                  className="h-11"
                />
                {errors.latitude && (
                  <p className="text-sm text-red-500">
                    {errors.latitude.message}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Tipp: Du kannst die Koordinaten von Google Maps kopieren
            </p>
          </div>
        </div>

        <div className="px-1 py-4 border-t border-border/50 bg-muted/30 flex items-center justify-end gap-3">
          <Button
            onClick={handleClose}
            type="button"
            variant="outline"
            className="h-10"
            disabled={isSubmitting}
          >
            Abbrechen
          </Button>

          <Button
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            className="bg-[hsl(145,40%,50%)] text-white hover:bg-[hsl(145,45%,40%)] shadow-[0_4px_14px_-3px_hsl(145,40%,45%,0.4)]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Wird erstellt...){" "}
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Erstellen
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreatePrayspotDialog;
