import { Component, OnInit } from '@angular/core';
import { VALIDATION_MESSAGES } from '../utils/validationmessages';
import { HttpClientService } from '../providers/http.provider';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  countryList:Array<any>;
  userDetails:any;
  validation = VALIDATION_MESSAGES;
  nameRegex = /^[a-zA-Z ]*$/;
  stateslist:Array<any>;
  filteredstateslist:Array<any>;
  check:any;
  constructor(private httpSVC:HttpClientService) {

    this.userDetails={
      firstName:'',
      lastName:'',
      password:'',
      confirmPassword:'',
      mobile:'',
      country:"",
      state:"",
      email:''
    }

    this.httpSVC.getCountriesFromApi()
      .subscribe((x:any) => {
        console.log(x);
        this.countryList = x.countries;
        console.log(this.countryList);
      },
    (err)=>{
      console.log(err);
    })
    
    this.httpSVC.getStates()
      .subscribe((x:any) => {
        
        this.stateslist = x.states;
        
      },
    (err)=>{
      console.log(err);
    })

   
  }
  signup(){
    console.info("userdetails",this.userDetails);
    this.httpSVC.registerUserDetails(this.userDetails);
    console.info('successfully done');
  }
  firstName = {
    placeholder: 'Enter First Name',
    label: "First Name",
    type: 'text',
    value: ''
  }
  lastName = {
    placeholder: 'Enter Last Name',
    label: "Last Name",
    type: 'text',
    value: ''
  }
  mobile = {
    placeholder: 'Enter mobile no.',
    label: "Mobile",
    type: 'text',
    value: ''
  }
  email = {
    placeholder: 'Enter email',
    label: "Email",
    type: 'text',
    value: ''
  }
  password = {
    placeholder: 'Enter password',
    label: "Password",
    type: 'password',
    value: ''
  }
  confirmPassword = {
    placeholder: 'Enter password',
    label: "Confirm password",
    type: 'password',
    value: ''
  }
  changeCountry() {
   this.filteredstateslist= this.httpSVC.states(this.stateslist,this.userDetails.country);
    console.log(this.stateslist);
  }

   

  ngOnInit() {
  }

}
