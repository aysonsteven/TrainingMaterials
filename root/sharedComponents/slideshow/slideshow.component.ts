import {Component, Input, OnInit} from '@angular/core';
import {slider} from "../../dto/slideshow.dto";

@Component({
    selector: 'slideshow',
    templateUrl: 'slideshow.component.html',
    styleUrls: ['slideshow.component.scss']
})
export class SlideShowComponent implements OnInit{
    @Input() slider: slider = new slider();
    constructor(){
    }

    ngOnInit(){
      console.log('slider', this.slider)

    }
}
