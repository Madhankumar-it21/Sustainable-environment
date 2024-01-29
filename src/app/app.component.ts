import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-angular-curd';
  @ViewChild('feed') feedInput: any;
  constructor(){}
  Send(){
    this.feedInput.nativeElement.value='';
    
    alert("Thankyou for giving Valuable Feedback!!!");
  }
}
