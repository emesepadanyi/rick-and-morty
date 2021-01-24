import { Character } from "./character.interface";
import { Info } from "./info.interface";

export interface Characters {
    info: Info;
    results: Character[];
}
