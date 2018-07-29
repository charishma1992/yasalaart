import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input()
  textBox: any;
  @Output()
  valueEntered: EventEmitter<any>
  constructor() {
    this.valueEntered = new EventEmitter<any>();
    this.textBox = {
      type: "",
      value: "",
      placeholder: "",
      label: ""

    }
  }
  onTextEntered() {
    this.valueEntered.emit(this.textBox.value);
  }
   open() {
    document.getElementById("mySidebar").style.display = "block";
}
 close() {
    document.getElementById("mySidebar").style.display = "none";
}
  ngOnInit() {
  }

}
