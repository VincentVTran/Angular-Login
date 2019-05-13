import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { SignInServiceService } from '../../../Service/sign-in-service.service'
@Component({
  selector: 'app-info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.css']
})
export class InfoInputComponent implements OnInit {
  myForm: FormGroup; //Stores form controls and group into variable
  submit(){
    this.data.getData().subscribe((data:any[]) => console.log(data)); //Extracts data using the method provided
  }
  constructor(private data:SignInServiceService) { } //Grabs http client along with the data on creation

  ngOnInit() {
    this.myForm = new FormGroup({ 
      username: new FormControl(),
      password: new FormControl(),
    })
  }

}
