import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import {RouterModule, Routes} from '@angular/router';
import {CatDataService} from './cat-data.service';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'output', component: OutputComponent},
  {path: '', redirectTo: 'input', pathMatch: 'full'},
  {path: '**', redirectTo: 'input'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [CatDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
