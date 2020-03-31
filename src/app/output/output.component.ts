import { Component } from '@angular/core';
import {Cat} from '../cat';
import {CatDataService} from '../cat-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  title = 'Output';
  public cat: Cat;
  public constructor(dataService: CatDataService) {
    this.cat = dataService.cat;
  }
}
