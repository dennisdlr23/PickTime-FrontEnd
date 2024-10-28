import { Component, OnInit } from '@angular/core';
import { PedidosFacturadosModel } from '../models/pedidosFacturados.model';
import { PedidosFacturadosService } from '../services/pedidosfacturados.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-pedidos-facturados',
  templateUrl: './pedidos-facturados.component.html',
  styleUrls: ['./pedidos-facturados.component.scss']
})
export class PedidosFacturadosComponent implements OnInit {

    loading: boolean = false;
    pedidosFacturadosModel: PedidosFacturadosModel[] = [];
    title: string = "Listado de Pedidos Facturados";
    display: boolean = false;

    constructor(
      private pedidosFacturadosService: PedidosFacturadosService,
      private auth: AuthService,
    ) { }

    ngOnInit(): void {
       this._getPedidos();
    }
      async _getPedidos(){
        try {
          this.loading = true;
          Messages.loading("Cargando...", "Espere un momento.");
          this.pedidosFacturadosModel = await this.pedidosFacturadosService.getFacturados();
          Messages.closeLoading();
          this.loading = false;
        } catch (ex) {
          Messages.closeLoading();
          Messages.warning(ex);

        }
      }
}
