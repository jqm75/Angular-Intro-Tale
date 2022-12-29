import { Component, Input } from '@angular/core';
import { Sentence } from '../interfaces/sentence';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

  @Input() arrSentence: Sentence[] = []
  currentSentence : number = 0

  prev(){}
  next(){}
  
  
}

