import { itemDTO } from './item.dto';
import { itemInterface } from './../interfaces/items.interface'
export class stockDTO{
    item: Array<itemInterface>;
    stockName: string;
    status: string;
    constructor(){
        // this.item = [new itemDTO()];
        // this.stockName = "";
        // this.status = ""
    }
}