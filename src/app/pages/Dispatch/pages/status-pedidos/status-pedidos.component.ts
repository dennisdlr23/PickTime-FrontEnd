import { Component, OnInit } from '@angular/core';

import { StatusPedidosService } from '../services/statuspedidos.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';
import { StatusPedidoModel } from '../models/statusPedidos.model';


@Component({
  selector: 'app-status-pedidos',
  templateUrl: './status-pedidos.component.html',
  styleUrls: ['./status-pedidos.component.scss']
})
export class StatusPedidosComponent implements OnInit {

    loading: boolean = false;
    statusPedidosModel: StatusPedidoModel[] = [];
    title: string = "Listado de Pedidos Entregados a Despacho";
    display: boolean = false;

    constructor(
      private statusPedidosService: StatusPedidosService,
      private auth: AuthService,
    ) { }

    ngOnInit(): void {
       this._getPedidos();
    }
      async _getPedidos(){
        try {
          this.loading = true;
          Messages.loading("Cargando...", "Espere un momento.");
          this.statusPedidosModel = await this.statusPedidosService.getEntregadoDespacho();
          Messages.closeLoading();
          this.loading = false;
        } catch (ex) {
          Messages.closeLoading();
          Messages.warning(ex);

        }
      }
}
