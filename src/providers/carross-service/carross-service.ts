import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../modelos/carro';

/*
  Generated class for the CarrossServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosServiceProvider {
    constructor(private _http: HttpClient) {
    }
    lista() {
        return this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
    }

}
