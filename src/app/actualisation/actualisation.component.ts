import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelActuaService } from '../model-actua.service';
import { Router } from '@angular/router';
import { constructor } from 'typescript';
import { Key } from 'protractor';

@Component({
  selector: 'app-actualisation',
  templateUrl: './actualisation.component.html',
  styleUrls: ['./actualisation.component.css']
})
export class ActualisationComponent implements OnInit {
  router = new Router();
  actuaForm: FormGroup;
  isFormSubmitted = false;
  public date = Date.now();


  formationOption = [
    { key: true, label: 'Oui', checked: false },
    { key: false, label: 'Non', checked: false },
  ];

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // Setting default selection in FormControl
    let getCheckedRadio = null;
    this.formationOption.forEach(o => {
      if (o.checked) {
        getCheckedRadio = o.key;
      }
    });

    this.actuaForm = new FormGroup({
      formation: new FormControl(null, [Validators.required]),
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.actuaForm.value);
    if (!this.actuaForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.actuaForm.value);
    }

    this.router.navigate(['actualisation/suite']);
  }
  // tslint:disable-next-line: typedef
  onReset() {
    this.actuaForm.reset();
  }
}
