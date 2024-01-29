import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  clean = "Done";
  complaints: any[] = [];

  constructor(private firestore: Firestore) { 
    // this.firestore.collection('complaints').valueChanges()
    //  .subscribe((complaints: any[]) => {
    //   this.complaints = complaints;
    //   });
  }

  ngOnInit(): void{
  }

  

  onclick() {
    this.clean = "Solved";

  }

}
