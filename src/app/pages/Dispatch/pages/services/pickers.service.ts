import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { PickersModel } from "../models/pickers.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class PickersService {

    constructor( private http: HttpClient ) { }

    async getPickers(){
        return firstValueFrom(
            this.http.get<PickersModel[]>(
                `${ environment.uriLogistic}/api/Pickers`
            )
        );
    }

    async addPicker(pickersModel:PickersModel) {
        return await firstValueFrom(this.http.post<PickersModel[]>(`${environment.uriLogistic}/api/Pickers`, pickersModel));
      }

      async editPicker(pickersModel:PickersModel) {
        return await firstValueFrom(this.http.put<PickersModel[]>(`${environment.uriLogistic}/api/Pickers`, pickersModel));
      }


}
