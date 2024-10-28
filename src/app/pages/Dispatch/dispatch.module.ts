import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchRoutingModule } from './dispatch-routing.module';

import { ComponentsPrimeNg } from 'src/app/components-primeng';
import { StatusPedidosComponent } from './pages/status-pedidos/status-pedidos.component';
import { SamsComponent } from './pages/sams/sams.component';
import { PickersComponent } from './pages/pickers/pickers.component';
import { SamsDialogComponent } from './pages/sams-dialog/sams-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PickersDialogComponent } from './pages/pickers-dialog/pickers-dialog.component';
import { PedidosFacturadosComponent } from './pages/pedidos-facturados/pedidos-facturados.component';
import { PedidosDetalleComponent } from './pages/pedidos-detalle/pedidos-detalle.component';





@NgModule({
  declarations: [
    StatusPedidosComponent,
    SamsComponent,
    PickersComponent,
    SamsDialogComponent,
    PickersDialogComponent,
    PedidosFacturadosComponent,
    PedidosDetalleComponent,

  ],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    ComponentsPrimeNg,
    ReactiveFormsModule
  ]
})
export class DispatchModule { }
