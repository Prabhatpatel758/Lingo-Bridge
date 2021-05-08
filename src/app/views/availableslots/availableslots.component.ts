import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-availableslots',
  templateUrl: './availableslots.component.html',
  styleUrls: ['./availableslots.component.scss']
})
export class AvailableslotsComponent implements OnInit {
  @ViewChild('date') public date;
  constructor() { }

  ngOnInit(): void {
  }

  slot = { date: '' };
  time = []



  dateValidation = () => {
    console.log(this.date.value);
  }
}
