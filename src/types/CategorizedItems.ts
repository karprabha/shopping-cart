import { Item } from "./Item";

export interface CategorizedItems {
    [key: string]: Item[];
}
