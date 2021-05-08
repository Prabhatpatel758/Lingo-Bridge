import { Component, OnInit, ViewChild } from '@angular/core';
import { timeslot } from '../models/timeslot.model'
declare var $: any;

@Component({
  selector: 'app-availableslots',
  templateUrl: './availableslots.component.html',
  styleUrls: ['./availableslots.component.scss']
})
export class AvailableslotsComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  timeSlots: timeslot[] = [
    { id: 1, name: '9-10', value: '9-10' },
    { id: 2, name: '10-11', value: '10-11' },
    { id: 3, name: '11-12', value: '11-12' },
    { id: 4, name: '12-13', value: '12-13' },
    { id: 5, name: '13-14', value: '13-14' },
    { id: 6, name: '14-15', value: '14-15' },
    { id: 7, name: '15-16', value: '15-16' },
    { id: 8, name: '16-17', value: '16-17' },
    { id: 9, name: '17-18', value: '17-18' },
    { id: 10, name: '18-19', value: '18-19' },
    { id: 6, name: '19-20', value: '19-20' },
    { id: 7, name: '20-21', value: '20-21' },
    { id: 8, name: '21-22', value: '21-22' },
    { id: 9, name: '22-23', value: '22-23' },
    { id: 10, name: '23-24', value: '23-24' }
  ]

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit(): void {

  }

  date: Date = null;
  time = ['']



  dateValidation = (value: Date): void => {
    this.date = value;
  }
}
