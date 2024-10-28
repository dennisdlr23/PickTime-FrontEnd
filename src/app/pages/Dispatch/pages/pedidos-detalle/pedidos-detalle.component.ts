import { Component, OnInit } from '@angular/core';
import { PedidosDetalleService } from '../services/pedidosDetalle.service';
import { PedidosDetalleModel } from '../models/pedidosDetalle.model';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-pedidos-detalle',
  templateUrl: './pedidos-detalle.component.html',
  styleUrls: ['./pedidos-detalle.component.scss']
})
export class PedidosDetalleComponent implements OnInit {
    loading: boolean = false;
    pedidosDetalleModel: PedidosDetalleModel[] = [];
    title: string = "Listado del Detalle de Pedidos";
    display: boolean = false;

    constructor(
      private pedidosDetalleService: PedidosDetalleService,
      private auth: AuthService,
    ) { }

    ngOnInit(): void {
       this._getPedidos();
    }
      async _getPedidos(){
        try {
          this.loading = true;
          Messages.loading("Cargando...", "Espere un momento.");
          this.pedidosDetalleModel = await this.pedidosDetalleService.getPedidosDetalles();
          Messages.closeLoading();
          this.loading = false;
        } catch (ex) {
          Messages.closeLoading();
          Messages.warning(ex);

        }
      }
}
