export class slider{
  title: string;
  items: Array<slideshowItem> = new Array<slideshowItem>();
  selected: number = 1;
  constructor(){
    this.selected = 1;
  }
}
export class slideshowItem{
  uniqueId: number;
  title: string;
  description: string;
  imagePath: string;
  constructor(){
    this.title = "";
    this.description = "";
    this.imagePath = "";
  }
}
