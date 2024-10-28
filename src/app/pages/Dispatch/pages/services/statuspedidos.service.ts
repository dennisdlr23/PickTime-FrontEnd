import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { StatusPedidoModel } from "../models/statusPedidos.model";


@Injectable({providedIn: 'root'})

export class StatusPedidosService {

    constructor( private http: HttpClient ) { }


    async getEntregadoDespacho(){
        return firstValueFrom(
            this.http.get<StatusPedidoModel[]>(
                `${environment.uriLogistic}/api/StatusPedidos/EntregadoDespacho`
            )
        );
    }
}


