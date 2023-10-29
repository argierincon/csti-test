export interface IAuthPayload {
  correo  : string;
  password: string;
}

export interface IAuth {
  status: string;
  data  : IData;
}

export interface IData {
  token: string;
  user : IUser;
}

export interface IUser {
  id          : number;
  nombre      : string;
  correo      : string;
  cargo       : string;
  departamento: string;
  oficina     : string;
  estadoCuenta: string;
}
