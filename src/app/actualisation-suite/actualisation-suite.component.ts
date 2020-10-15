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
  visibiltyCas = true;

  listOption = [
    { key: true, label: 'Oui', checked: false },
    { key: false, label: 'Non', checked: false },
  ];

  optionRecherche = [
    { key: 1, label: 'Reprise du travail' },
    { key: 2, label: 'Retraite' },
    { key: 3, label: 'Autre' },
  ];
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.visibiltyCas;
    // tslint:disable-next-line: no-unused-expression
    this.optionRecherche;

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
  onSubmit() {
  }
  // tslint:disable-next-line: typedef
  onReset() {
    this.actuaForm.reset();
  }
}
