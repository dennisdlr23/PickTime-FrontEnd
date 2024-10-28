import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { PedidosFacturadosModel } from "../models/pedidosFacturados.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class PedidosFacturadosService {

    constructor( private http: HttpClient ) { }


    async getFacturados(){
        return firstValueFrom(
            this.http.get<PedidosFacturadosModel[]>(
                `${environment.uriLogistic}/api/OrderHistory/Facturados`
            )
        );
    }
}

