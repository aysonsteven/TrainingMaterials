import { itemInterface } from './items.interface'
export interface stockInterface{
    item: Array<itemInterface>;
    stockName: string;
    status: string;
}