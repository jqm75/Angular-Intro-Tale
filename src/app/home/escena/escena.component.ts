import { Component, Input } from '@angular/core';
import { Sentence } from '../interfaces/sentence';
@Component({

  selector   : 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls  : ['./escena.component.scss']

})

export class EscenaComponent {

  @Input() arrSentence : Sentence[] = []
  currentSentence : number = 0

  /* prev(){

    if (this.currentSentence === 0) {
      this.currentSentence = this.arrSentence.length - 1;
    } else {
      this.currentSentence--
    }

  }

  next(){

    if (this.currentSentence === this.arrSentence.length - 1) {
      this.currentSentence = 0;
    } else {
      this.currentSentence++
    }

  } */    

  navigate = (direction: string) => {
    if (direction === 'next') {
      this.currentSentence++;
    } else if (direction === 'prev') {
      this.currentSentence--;
    }



  }

  
}

