import { mockGetEmployees, mockLogin } from "../services/apiMock";
import { IAuthPayload, IData } from "./interfaces/auth.interface";

export const actions = {
  async login(payload: IAuthPayload) {
    try {
      const data = await mockLogin(payload.correo, payload.password);

      this.dataAuth = data;

      console.log("Login exitoso:", data);
    } catch (error) {
      console.error("Error en el login:", error);
      throw new Error("No se pudo completar el login.");
    }
  },
  async getEmployees() {
    const queryParams = `limit=${this.tableLimit}&page=${this.tablePage}`;
    try {
      const data = await mockGetEmployees(queryParams);
      this.dataEmployees = data;
    } catch (error) {
      console.error("Error al obtener los empleados", error);
    }
  },
  setAuthData(data: IData) {
    this.dataAuth = { data };
  },
};
