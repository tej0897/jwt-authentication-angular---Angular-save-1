import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup | any;
  success = false;
  errMessage = ''

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      empID:['', Validators.required],
      empName:['',Validators.required],
      password:['',Validators.required]
    }) 
  }

  register(){
    const formValue = this.registerForm.value
    this.registerService.register(formValue.empID, formValue.empName, formValue.password).subscribe({next:() => {
      this.success = true
      console.log(this.registerForm);
    },error : (err) =>{
      if(err.error.code == 11000)
        this.errMessage= 'User already exists!! Try something else.'
      else 
        this.errMessage= 'Something went wrong!!'
    }})
  }

}