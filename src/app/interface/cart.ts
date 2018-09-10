import { Item } from '../interface/item';

export interface Cart extends Item {
    quantity: number;
}