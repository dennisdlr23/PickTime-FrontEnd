import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusPedidosComponent } from './pages/status-pedidos/status-pedidos.component';
import { SamsComponent } from './pages/sams/sams.component';
import { PickersComponent } from './pages/pickers/pickers.component';
import { PedidosFacturadosComponent } from './pages/pedidos-facturados/pedidos-facturados.component';
import { PedidosDetalleComponent } from './pages/pedidos-detalle/pedidos-detalle.component';




const routes: Routes = [
    {
        path:'',
        children:[

            {
                 path: 'pedidos-lista',
                 component: StatusPedidosComponent,
            },
            {
                path: 'sams-lista',
                component: SamsComponent,
           },
           {
                path: 'pickeadores-lista',
                component: PickersComponent,
            },
            {
                path: 'pedidos-facturados',
                component: PedidosFacturadosComponent,
            },
            {
                path: 'pedidos-detalle',
                component: PedidosDetalleComponent,
            },


            { path: '**', redirectTo: ''},
        ],
    }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
