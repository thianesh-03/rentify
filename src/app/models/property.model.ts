import { User } from './user.model';

export interface Property {
  id?: string;
  place: string;
  area: string;
  numBedrooms: number;
  numBathrooms: number;
  hospitalsNearby: string[];
  collegesNearby: string[];
  sellerDetails: User;
  postedDate: Date;
  lastUpdatedDate: Date;
}