import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import {CatDataService} from './cat-data.service';
import {RouterModule, Routes} from '@angular/router';
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
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CatDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
