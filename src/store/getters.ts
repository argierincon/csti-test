import { IState } from "./state";
export const getters = {
  token(state: IState) {
    return state?.dataAuth?.data?.token;
  },
  user(state: IState) {
    return state?.dataAuth?.data?.user;
  },
  employees(state: IState) {
    return state?.dataEmployees?.data;
  },
  tableTotal(state: IState) {
    return state?.dataEmployees?.total;
  },
};
