import {Cat} from './cat';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CatDataService {
  public cat = new Cat();
}
