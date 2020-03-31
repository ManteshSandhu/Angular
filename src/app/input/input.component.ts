import { Component, OnInit } from '@angular/core';
import {Cat} from '../cat';
import {CatDataService} from '../cat-data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public title = 'Input';
  public gend = [
    '-- select gender --',
    'Male', 'Female',
    'ThirdGender'];
  public form: FormGroup;
  public cat: Cat;
  private router: Router;

  public constructor(dataService: CatDataService, router: Router) {
    this.cat = dataService.cat;
    this.router = router;
  }

  public send(data) {
    this.cat.catName = data.catName;
    this.cat.gender = data.gender;
    this.cat.vacc = data.vacc;
    this.router.navigate(['output']).then(() => {
      console.log('showing the output data');
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      cName: new FormControl('', Validators.required),
      gender: new FormControl(0, Validators.required),
      vacc: new FormControl(false)
    });
  }
}
