export interface IEmpleados {
  status: string;
  data:   IEmployee[];
  total:  number;
}

export interface IEmployee {
  id:           number;
  nombre:       string;
  correo:       string;
  cargo:        string;
  departamento: string;
  oficina:      string;
  estadoCuenta: string;
}

export enum AccountStatus {
  Activada = "Activada",
  Desactivada = "Desactivada",
}
