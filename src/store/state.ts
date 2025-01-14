import { IAuth } from "./interfaces/auth.interface";
import { IEmpleados } from "./interfaces/employee.interface";

export interface IState {
  dataAuth: IAuth;
  dataEmployees: IEmpleados;
}

export const state = (): IState => ({
  dataAuth: null,
  dataEmployees: null,
});
