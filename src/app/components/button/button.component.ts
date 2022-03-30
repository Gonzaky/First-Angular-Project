import { Component, OnInit , Input ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text! :string;
@Input() color! : string;

@Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}


onClick(){
  this.btnClick.emit();
}
}
// IMPORTANT NOTE : this component is a custom button with simply an eventEmitter
// which means this component can be used on any other components that want a button with an onClick!
// with this component we don't need to rewrite an onclick every single time on every component
// if we wanted another button equal to this one,
// with this custom button the text inside and the color or styles is given as props later
// on the html tag where it's being used in the parent component
