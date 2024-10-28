export interface PedidosFacturadosModel {
    id:                number;
    fecha:             Date;
    pedido:            string;
    responsable:       string;
    nombre_Vendedor:   string;
    nombreCiudad:      string;
    totalLinea:        number;
    cantidadLineas:    number;
    tiempoPreparacion: number;
    tiempoTardado:     number;
    eficiencia:        number;
}
