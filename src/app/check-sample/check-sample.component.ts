import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})

export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
    count:number = 0;
    constructor() {

    }

    addToCount(){
      this.count += 1;
    }

    removeToCount(){
      this.count -= 1;
    }

    ngOnInit(): void {
      console.log('ngOnInit');
    }

    ngDoCheck(): void {
      console.log('ngDoCheck');
    }

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }

    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }

    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }

    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }
}
