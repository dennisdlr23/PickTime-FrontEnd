export interface PedidosDetalleModel {
    fecha:             Date;
    pedido:            string;
    nombre_Cliente:    string;
    nombre_Vendedor:   string;
    itemCode:          string;
    nombreProducto:    string;
    cantidadPedido:    number;
    unidadMedida:      string;
    uxc:               number;
    totalLinea:        number;
    status:            string;
    nombreCiudad:      string;
    responsable:       string;
    tiempoPreparacion: number;
    sams:              string;
    tiempoTardado:     number;
}
