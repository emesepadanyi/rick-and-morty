import { Info } from "./info.interface";
import { LocationDetailed } from "./location-detailed";

export interface Locations {
    info: Info;
    results: LocationDetailed[];
}
