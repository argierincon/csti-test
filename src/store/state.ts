import { IAuth } from "./interfaces/auth.interface";
import { IEmployeeList } from "./interfaces/employee.interface";

export interface IState {
  dataAuth: IAuth;
  dataEmployees: IEmployeeList;
}

export const state = (): IState => ({
  dataAuth: null,
  dataEmployees: null,
});
