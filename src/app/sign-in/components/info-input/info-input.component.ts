import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.css']
})
export class InfoInputComponent implements OnInit {
  myForm: FormGroup; //Stores form controls and group into variable
  submit(){
    console.log(this.myForm.value);
  }
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({ 
      username: new FormControl(),
      password: new FormControl(),
    })
  }

}
