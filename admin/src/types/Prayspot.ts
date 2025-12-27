import type { SpotType } from "./SpotType";

export interface Prayspot {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  type: SpotType;
  isVerified: boolean;
}
