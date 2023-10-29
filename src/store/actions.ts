import { http } from "../services/http";
import { IAuth, IAuthPayload, IData } from "./interfaces/auth.interface";
import { IEmpleados } from "./interfaces/employee.interface";

export const actions = {
  async login(payload: IAuthPayload) {
    const { data } = await http.post<IAuth>("/auth/login", payload);
    console.log(data);
    http.defaults.headers.common.Authorization = `Token ${data.data.token}`;
    this.dataAuth = data;
  },
  async getEmployees() {
    const queryParams = `limit=${this.tableLimit}&page=${this.tablePage}`;
    const { data } = await http.get<IEmpleados>("/empleados?" + queryParams);
    this.dataEmployees = data;
  },

  setAuthData(data: IData) {
    http.defaults.headers.common.Authorization = `Token ${data.token}`;
    this.dataAuth = { data };
  },

  setLimit(limit: number) {
    this.tableLimit = limit;
    this.tablePage = 1;
  },

  setPage(page: number) {
    this.tablePage = page;
  },
};
