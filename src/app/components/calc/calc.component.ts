import { Component, ElementRef, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { allbuttons } from './buttonsdata';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements AfterViewInit {

  public allbuttons = allbuttons

  public data=""
  public ans=0;
  public showInputField=true;

  @ViewChild('userName') userName: ElementRef = {} as ElementRef;

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  buttonClick()
  {
    
  }

  ngAfterViewChecked(): void {
    this.userName.nativeElement.focus();
  }

}
