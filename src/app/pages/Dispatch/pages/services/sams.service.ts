import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { environment } from "src/environments/environment";
import { SamsModel } from "../models/sams.model";

@Injectable({providedIn: 'root'})

export class SamsService {

    constructor( private http: HttpClient ) { }

    async getSams(){
        return firstValueFrom(
            this.http.get<SamsModel[]>(
                `${ environment.uriLogistic}/api/SAMs`
            )
        );
    }

    async addSams(samsModel:SamsModel) {
        return await firstValueFrom(this.http.post<SamsModel[]>(`${environment.uriLogistic}/api/SAMs`, samsModel));
      }

      async editSams(samsModel:SamsModel) {
        return await firstValueFrom(this.http.put<SamsModel[]>(`${environment.uriLogistic}/api/SAMs`, samsModel));
      }


}
