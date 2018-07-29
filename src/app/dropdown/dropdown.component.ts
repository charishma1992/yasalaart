import { Component, OnInit, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
@Input()
data:any;
selectedValue:String;
  constructor() {
console.info('data0',this.data);

   }

  ngOnInit() {
  }

}
