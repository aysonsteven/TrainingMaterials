import {Component, Input, OnInit} from '@angular/core';
import {slider} from "../../dto/slideshow.dto";

@Component({
    selector: 'slideshow',
    templateUrl: 'slideshow.component.html',
    styleUrls: ['slideshow.component.scss']
})
export class SlideShowComponent implements OnInit{
    @Input() slider: slider = new slider();
    interval: any;
    constructor(){
    }

    ngOnInit(){
      console.log('slider', this.slider)
      this.changeSlide();

    }

    changeSlide(){
      this.interval = setInterval( ()=>{
        if( this.slider.items.length > this.slider.selected )this.slider.selected += 1;
        else this.slider.selected = 1;
      }, 2000)
    }
    stop(){
      this.interval.clearInterval();
    }
}
