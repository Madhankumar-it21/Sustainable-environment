import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

 // login method
    login(email : string, password : string) {
      if (email == 'admin123@gmail.com' && password =='admin@123') {
        localStorage.setItem('token','true');
        this.router.navigate(['/portal']);
      }else{
      this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
          localStorage.setItem('token','true');
          this.router.navigate(['complaint']);
      }, err => {
          alert(err.message);
          this.router.navigate(['/login']);
      })
    }
  }
  
  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }


}


