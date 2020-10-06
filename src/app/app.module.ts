import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualisationComponent } from './actualisation/actualisation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualisationSuiteComponent } from './actualisation-suite/actualisation-suite.component';
import { ModelActuaService } from './model-actua.service';

const routes: Routes = [
  { path: "", component: AccueilComponent},
  { path: "actualisation", component: ActualisationComponent},
  { path: "actualisation/suite", component: ActualisationSuiteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActualisationComponent,
    AccueilComponent,
    ActualisationSuiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ModelActuaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
