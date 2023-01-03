import { Component } from '@angular/core';
import data from '../../assets/data/db.json';
import { Sentence } from './interfaces/sentence';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})

export class HomeComponent {

  /* showWelcome : Boolean = true; */
  arrData: Sentence[] = data

}
