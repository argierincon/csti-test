import { IAuth } from "./interfaces/auth.interface";
import { IEmpleados } from "./interfaces/employee.interface";

export interface IState {
  dataAuth     : IAuth;
  dataEmployees: IEmpleados;
  tableLimit   : number;
  tablePage    : number;
}

export const state = (): IState => ({
  dataAuth     : null,
  dataEmployees: null,
  tableLimit   : 10,
  tablePage    : 1,
});
