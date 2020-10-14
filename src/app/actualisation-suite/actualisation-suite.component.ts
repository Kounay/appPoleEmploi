import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelActuaService } from '../model-actua.service';
import { Router } from '@angular/router';
import { constructor } from 'typescript';

@Component({
  selector: 'app-actualisation-suite',
  templateUrl: './actualisation-suite.component.html',
  styleUrls: ['./actualisation-suite.component.css']
})
export class ActualisationSuiteComponent implements OnInit {
  actuaForm: FormGroup;
  public date = Date.now();
  public datePremierJour = Date.prototype.getMonth() - 1;
  isFormSubmitted = false;
  constructor() { }
  visibiltyCas = true;

  listOption = [
    {key: true, label: 'Oui', checked: false},
    {key: false, label: 'Non', checked: false},
  ];

  optionRecherche = [
    {key: 1, label: 'Reprise du travail'},
    {key: 2, label: 'Retraite'},
    {key: 3, label: 'Autre'},
  ];
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.visibiltyCas;
    this.optionRecherche;
    // Setting default selection in FormControl
    let getCheckedRadio = null;
    this.listOption.forEach(o => {
      if (o.checked) {
        getCheckedRadio = o.key;
      }
    });

    this.actuaForm = new FormGroup({
      travail: new FormControl(null, [Validators.required]),
      stage: new FormControl(null, [Validators.required]),
      arretMaladie: new FormControl(null, [Validators.required]),
      pensionRetraite: new FormControl(null, [Validators.required]),
      pensionInvalidite: new FormControl(null, [Validators.required]),
      rechercheEmploi: new FormControl(null, [Validators.required])
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    this.isFormSubmitted = true;
    console.log(this.actuaForm.value);
    if (!this.actuaForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.actuaForm.value);
      // this.router.navigate(['actualisation/suite']);
    }
  }
  // tslint:disable-next-line: typedef
  onReset(){
    this.actuaForm.reset();
  }
}
