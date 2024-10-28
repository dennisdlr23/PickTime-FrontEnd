import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { PedidosDetalleModel } from "../models/pedidosDetalle.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class PedidosDetalleService {

    constructor( private http: HttpClient ) { }


    async getPedidosDetalles(){
        return firstValueFrom(
            this.http.get<PedidosDetalleModel[]>(
                `${environment.uriLogistic}/api/OrderDetail/DetallesPedido`
            )
        );
    }
}
