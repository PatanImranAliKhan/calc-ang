import { Component, ElementRef, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { allbuttons } from './buttonsdata';
import { addData } from './TSfiles/operations';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements AfterViewInit {

  public allbuttons = allbuttons

  public data=""
  public ans="";

  public sample="";

  public showInputField=true;

  @ViewChild('focusvalue') focusvalue: ElementRef = {} as ElementRef;

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  buttonClick(selectinput: string)
  {
    this.data+=selectinput;
    this.ans=addData(selectinput);

  }

  ngAfterViewChecked(): void {
    this.focusvalue.nativeElement.focus();
  }


  changeInput(newvalue: any)
  {
    console.log(newvalue[newvalue.length-1]);
    this.data+=newvalue[newvalue.length-1];
    this.ans=addData(newvalue[newvalue.length-1]);
  }

}
