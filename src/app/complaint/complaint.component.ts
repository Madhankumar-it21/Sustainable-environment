import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { Firestore } from '@angular/fire/firestore';

interface Complaint {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  city: string;
  district: string;
  systems: {
    garbage: boolean;
    water: boolean;
    sanitation: boolean;
    drainage: boolean;
  };
  photo: string;
  describe: string;
}

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {

  complaintForm!: FormGroup;
  complaint: Complaint = {
    name: '',
    email: '',
    mobile: '',
    gender: '',
    city: '',
    district: '',
    systems: {
      garbage: false,
      water: false,
      sanitation: false,
      drainage: false
    },
    photo: '',
    describe: ''
  };
  
  submitted = false;
  selectedFile?: File;
  storage: any;



  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private complaintService: ComplaintService,
    private firestore: Firestore
  ) {}
  ngOnInit(): void {
  }
 
 uploadFile(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    const filePath = `complaints/${this.complaint.name}/${file.name}`;
    const task = this.storage.upload(filePath, file);
    task.then((result: { ref: { getDownloadURL: () => Promise<any>; }; }) => {
      result.ref.getDownloadURL().then((url) => {
        this.complaint.photo = url;
      });
    });
  }
 
onSubmit(){
  //this.submitted = true;
//  this.firestore.collection('complaints').add(this.complaint)
//     .then(() => {
//       console.log('Complaint submitted successfully!');
//    })
//   .catch((error: any) => {
//     console.error('Error submitting complaint:', error);
//     });
    
    }
 


}
