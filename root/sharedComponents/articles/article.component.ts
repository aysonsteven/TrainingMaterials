import {Component, Input} from "@angular/core"
import {article} from "../../interfaces/article.interface";
@Component({
  selector: 'article-component',
  templateUrl: 'article.component.html',
  styleUrls: [ 'article.component.scss' ]
})
export class ArticleComponent{
  @Input() articleObjecet: article;

  constructor(){}
}
