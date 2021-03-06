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

  constructor(private router: Router) {}
  actuaForm: FormGroup;
  public date = Date.now();


  formationOption = [
    { key: true, label: 'Oui', checked: false },
    { key: false, label: 'Non', checked: false },
  ];

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.actuaForm = new FormGroup({
      formation: new FormControl(null, [Validators.required]),
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.router.navigate(['actualisation/suite']);
  }

  // tslint:disable-next-line: typedef
  onReset() {
    this.actuaForm.reset();
  }
}
