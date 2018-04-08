import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemsService {
option = { withCredentials: true};
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getItems(start, segment) {
    return this.http.get(`http://localhost:3000/items/${start}/${segment}`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createItem() {
    return this.http.get(`http://localhost:3000/items/new`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }


}
