import type { Address } from "./Address";
import type { SpotType } from "./SpotType";

export interface PrayspotRequestDto {
  name: string;
  description?: string;
  type: SpotType;
  address: Address;
  latitude: number;
  longitude: number;
}
