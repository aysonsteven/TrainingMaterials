import { Component } from '@angular/core';
import { stockInterface } from './../../interfaces/stock.interface';
import { itemInterface } from './../../interfaces/items.interface';
import { stockDTO } from './../../dto/stock.dto';
import { itemDTO } from './../../dto/item.dto';
import {slider} from "../../dto/slideshow.dto";
@Component({
    selector: 'home-page',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]

})
export class HomePage{
    stocks: Array<stockInterface> = [];
    slider: slider = new slider();
    constructor(){
      let a = {
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'title': 'title',
        'imagePath': './../../assets/images/2.jpg',
        'uniqueId': 1
      }
      let b = {
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'title': 'title 2',
        'imagePath': './../../assets/images/3.jpg',
        'uniqueId': 2
      }
      let c = {
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'title': 'title 3',
        'imagePath': './../../assets/images/4.jpg',
        'uniqueId': 3
      }
      let d = {
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'title': 'title 4',
        'imagePath': './../../assets/images/5.jpg',
        'uniqueId': 4
      }
      this.slider.items.push( d );
      this.slider.items.push( c );
      this.slider.items.push( b );
      this.slider.items.push( a );

      this.slider.title = 'main title'
        let item: itemInterface = {
            description: 'this is the first item',
            name: 'this is the name',
            quantity: 3
        };
        let stockV:stockInterface = {
            item: [item],
            status: 'active',
            stockName: 'stock new'
        }

        let item2: itemInterface = {
            description: 'this is the first item',
            name: 'this is the name',
            quantity: 3
        };
        let stockV2:stockInterface = {
            item: [item,item2],
            status: 'inactive',
            stockName: 'stock2'
        }
        this.stocks.push( stockV )
        this.stocks.push( stockV2 )
        console.log( 'stock', this.stocks)
    }
}
