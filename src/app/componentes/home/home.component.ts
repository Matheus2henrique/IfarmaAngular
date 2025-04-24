import { Component, Input, OnInit } from '@angular/core';
import { Juntar } from '../juntar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() juntar: Juntar = {
      id : 0,
      produto : 'Sementes'
    }

  constructor() { }

  ngOnInit(): void {
  }

}
