import type { SpotType } from "./SpotType";

export interface Prayspot {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  type: SpotType;
}
