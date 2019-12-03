import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-double-inputs-number',
  templateUrl: './double-inputs-number.component.html',
  styleUrls: ['./double-inputs-number.component.css']
})
export class DoubleInputsNumberComponent implements OnInit {

  @Output() InputsValues: EventEmitter<object> = new EventEmitter<object>();

  values = { name: <any>null, value: <any>null };

  constructor() { }

  ngOnInit() {
    this.InputsValues.emit(this.values);
  }

}