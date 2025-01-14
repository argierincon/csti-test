import { IAuth } from "../store/interfaces/auth.interface";
import { IEmpleados } from "../store/interfaces/employee.interface";
import { employees, user } from "./mocks";

export async function mockLogin(
  email: string,
  password: string
): Promise<IAuth> {
  console.log(email, password);

  return new Promise<IAuth>((resolve) => {
    setTimeout(() => resolve(user), 1500);
  });
}

export async function mockGetEmployees(params?: string): Promise<IEmpleados> {
  return new Promise<IEmpleados>((resolve) => {
    setTimeout(() => {
      const urlParams = new URLSearchParams(params);
      const limit = parseInt(urlParams.get("limit") || "10", 10);
      const page = parseInt(urlParams.get("page") || "1", 10);

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = employees.data.slice(startIndex, endIndex);

      resolve({
        status: employees.status,
        data: paginatedData,
        total: employees.total,
      });
    }, 1500);
  });
}
