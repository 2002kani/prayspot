import type { Address } from "./Address";
import type { SpotType } from "./SpotType";

export interface Prayspot {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: Address;
  type: SpotType;
  isVerified: boolean;
}
